//
// Created by albertocamilo on 3/2/21.
//

#include <iostream>
#include <vector>
#include <unordered_set>

using namespace std;

class Game {
    int N;
    int *matrix;

public:
    Game(int N) {
        this->N = N;
        this->matrix = new int[N];
    }

    auto resolve() {
        unordered_set<int> observer;
        vector<int> response;
        for (int i = 0; i < N; i++) {
            cout << "Enter values for matrix" << endl;
            cin >> this->matrix[i];
            int value = N - this->matrix[i];
            if (observer.find(value) != observer.end()) {//ha encontrado el valor
                response.push_back(this->matrix[i]);
                response.push_back(value);
                return response;
            }
            observer.insert(value);
        }
    }
};

int main() {

    int nvalue;
    cout << "Enter a value for N" << endl;
    cin >> nvalue;

    auto response = (new Game(nvalue))->resolve();
    cout << "Los valores que suman " << nvalue
         << " son :[" << response[0] << "," << response[1] << "]" << endl;
    return true;
}