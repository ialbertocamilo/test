//
// Created by albertocamilo on 3/2/21.
//

#include <iostream>
#include <vector>

using namespace std;

class Game {
    int N;
    int *matrix;

public:
    Game(int N) {
        this->N = N;
        this->matrix = new int[N];
        for (int i = 0; i < N; i++) {
            cout << "Enter values for matrix" << endl;
            cin >> this->matrix[i];
        }
    }

    auto resolve() {
        vector<int> response;
        for (int i = 0; i < N; i++) {
            for (int y = 0; y < N; y++) {
                if (this->matrix[i] + this->matrix[y] == this->N) {
                    response.push_back(this->matrix[i]);
                    response.push_back(this->matrix[y]);
                    return response;
                }
            }
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