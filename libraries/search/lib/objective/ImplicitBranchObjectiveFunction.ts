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
import { Encoding } from "../Encoding";
import { SearchSubject } from "../SearchSubject";

import { BranchObjectiveFunction } from "./BranchObjectiveFunction";
import { ApproachLevel } from "./heuristics/ApproachLevel";
import { BranchDistance } from "./heuristics/BranchDistance";

export abstract class ImplicitBranchObjectiveFunction<
  T extends Encoding
> extends BranchObjectiveFunction<T> {
  protected constructor(
    approachLevel: ApproachLevel,
    branchDistance: BranchDistance,
    subject: SearchSubject<T>,
    id: string
  ) {
    super(approachLevel, branchDistance, subject, id);
  }

  abstract override calculateDistance(encoding: T): number;
}
