/*
 * Copyright 2020-2021 Delft University of Technology and SynTest contributors
 *
 * This file is part of SynTest Framework - SynTest Core.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Encoding } from "../../Encoding";

/**
 * Creates children swapping statements between the parents
 * @param parents the parent individuals
 *
 * @return a tuple of children
 *
 * @author Annibale Panichella
 * @author Dimitri Stallenberg
 */
export abstract class Crossover<T extends Encoding> {
  private _crossoverEncodingProbability: number;
  private _crossoverStatementProbability: number;

  constructor(
    crossoverEncodingProbability: number,
    crossoverStatementProbability: number
  ) {
    this._crossoverEncodingProbability = crossoverEncodingProbability;
    this._crossoverStatementProbability = crossoverStatementProbability;
  }

  abstract crossOver(parents: T[]): T[];

  get crossoverEncodingProbability(): number {
    return this._crossoverEncodingProbability;
  }

  get crossoverStatementProbability(): number {
    return this._crossoverStatementProbability;
  }
}
