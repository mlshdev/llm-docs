> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/gameplaykit](https://developer.apple.com/documentation/gameplaykit)

# GameplayKit

**Interface languages:** Swift, Objective-C

**Framework:** GameplayKit  
**Kind:** Framework  
**Availability:** iOS 9.0+ · iPadOS 9.0+ · Mac Catalyst 13.0+ · macOS 10.11+ · tvOS 9.0+ · visionOS 1.0+

Architect and organize your game logic. Incorporate common gameplay behaviors such as random number generation, artificial intelligence, pathfinding, and agent behavior.

<a id="overview"></a>

## Overview

GameplayKit is an object-oriented framework that provides foundational tools and technologies for building games. GameplayKit includes tools for designing games with functional, reusable architecture, as well as technologies for building and enhancing gameplay features such as character movement and opponent behavior.

<a id="Getting-Started-with-GameplayKit"></a>

### Getting Started with GameplayKit

GameplayKit covers many aspects of game design and development. For deeper discussions of the game design patterns you can leverage with GameplayKit, along with tutorials that illustrate building games with GameplayKit features, see [GameplayKit Programming Guide](https://developer.apple.com/library/archive/documentation/General/Conceptual/GameplayKit_Guide/index.html#//apple_ref/doc/uid/TP40015172).

<a id="Related-Sample-Code"></a>

### Related Sample Code

To experiment with GameplayKit in action, see these sample code projects:

- [Boxes: GameplayKit Entity-Component Basics](https://developer.apple.com/library/archive/samplecode/Boxes_GamePlayKit/Introduction/Intro.html#//apple_ref/doc/uid/TP40016459)
- [Dispenser: GameplayKit State Machine Basics](https://developer.apple.com/library/archive/samplecode/Dispenser_GameplayKit/Introduction/Intro.html#//apple_ref/doc/uid/TP40016460)
- [Pathfinder: GameplayKit Pathfinding Basics](https://developer.apple.com/library/archive/samplecode/Pathfinder_GameplayKit/Introduction/Intro.html#//apple_ref/doc/uid/TP40016461)
- [AgentsCatalog: Using the Agents System in GameplayKit](https://developer.apple.com/library/archive/samplecode/AgentsCatalog/Introduction/Intro.html#//apple_ref/doc/uid/TP40016141)
- [FourInARow: Using the GameplayKit Minmax Strategist for Opponent AI](https://developer.apple.com/library/archive/samplecode/FourInARow/Introduction/Intro.html#//apple_ref/doc/uid/TP40016142)
- [DemoBots: Building a Cross Platform Game with SpriteKit and GameplayKit](https://developer.apple.com/library/archive/samplecode/DemoBots/Introduction/Intro.html#//apple_ref/doc/uid/TP40015179)

## Topics

### Entities and Components

A general architecture for designing composable, reusable gameplay logic.

- [GKEntity](gameplaykit/gkentity.md): An object relevant to gameplay, with functionality entirely provided by a collection of component objects.
- [GKComponent](gameplaykit/gkcomponent.md): The abstract superclass for creating objects that add specific gameplay functionality to an entity.
- [GKComponentSystem](gameplaykit/gkcomponentsystem.md): Manages periodic update messages for all component objects of a specified class.

### State Machines

A modular system for defining state-dependent gameplay logic.

- [GKState](gameplaykit/gkstate.md): The abstract superclass for defining state-specific logic as part of a state machine.
- [GKStateMachine](gameplaykit/gkstatemachine.md): A finite-state machine—a collection of state objects that each define logic for a particular state of gameplay and rules for transitioning between states.

### Spatial Partitioning

Data structures that organize the objects in a game world for quick searching by position or proximity.

- [GKQuadtree](gameplaykit/gkquadtree.md): A data structure for organizing objects based on their locations in a two-dimensional space.
- [GKQuadtreeNode](gameplaykit/gkquadtreenode.md): A helper class for managing the objects you organize in a quadtree.
- [GKOctree](gameplaykit/gkoctree.md): A data structure for organizing objects based on their locations in a three-dimensional space.
- [GKOctreeNode](gameplaykit/gkoctreenode.md): A helper class for managing the objects you organize in an octree.
- [GKRTree](gameplaykit/gkrtree.md): A data structure that adaptively organizes objects based on their locations in a two-dimensional space.

### Strategists

A form of AI for planning moves in turn-based games. Describe your gameplay by creating classes that adopt the game model protocols, then use those classes with a strategist object to create AI players or suggest moves.

- [GKStrategist](gameplaykit/gkstrategist.md): A general interface for objects that provide artificial intelligence for use in turn-based (and similar) games.
- [GKMinmaxStrategist](gameplaykit/gkminmaxstrategist.md): An AI that chooses moves in turn-based games using a *deterministic* strategy.
- [GKMonteCarloStrategist](gameplaykit/gkmontecarlostrategist.md): An AI that chooses moves in turn-based games using a *probabilistic* strategy.
- [GKGameModel](gameplaykit/gkgamemodel.md): Implement this protocol to describe your gameplay model so that a strategist object can plan game moves.
- [GKGameModelPlayer](gameplaykit/gkgamemodelplayer.md): Implement this protocol to describe a player in your turn-based game so that a strategist object can plan game moves.
- [GKGameModelUpdate](gameplaykit/gkgamemodelupdate.md): Implement this protocol to describe a move in your turn-based game so that a strategist object can plan game moves.

### Decision Trees

Define a series of questions and possible answers leading to a final action, or automatically build a predictive model based on data your provide.

- [GKDecisionTree](gameplaykit/gkdecisiontree.md): A data structure that models a set of specific questions, their possible answers, and the actions that follow from a series of answers.
- [GKDecisionNode](gameplaykit/gkdecisionnode.md): A node for use in manually creating decision trees, representing a specific question and possible answers, or an action that follows from answering other questions.

### Pathfinding

Create graphs that model the navigability of your game world, allowing GameplayKit to plan optimal routes for game characters to follow.

- [GKGraph](gameplaykit/gkgraph.md): A collection of nodes that describes the navigability of a game world and provides *pathfinding* methods to search for routes through that space.
- [GKObstacleGraph](gameplaykit/gkobstaclegraph.md): A navigation graph for 2D game worlds that creates a minimal network for precise pathfinding around obstacles.
- [GKMeshGraph](gameplaykit/gkmeshgraph.md): A navigation graph for 2D game worlds that creates a space-filling network for smooth pathfinding around obstacles.
- [GKGridGraph](gameplaykit/gkgridgraph.md): A navigation graph for 2D game worlds where movement is constrained to an integer grid.
- [GKGraphNode](gameplaykit/gkgraphnode.md): A single node in a navigation graph for use in pathfinding.
- [GKGraphNode2D](gameplaykit/gkgraphnode2d.md): A node in a navigation graph, associated with a point in continuous 2D space.
- [GKGraphNode3D](gameplaykit/gkgraphnode3d.md): A node in a navigation graph, associated with a point in continuous 3D space.
- [GKGridGraphNode](gameplaykit/gkgridgraphnode.md): A node in a navigation graph, associated with a position on a discrete two-dimensional grid.

### Agents, Goals, and Behaviors

Add autonomous movement to characters and other game objects by combining high-level goals such as moving to a target, following a path, or avoiding obstacles.

- [GKAgent](gameplaykit/gkagent.md): A component that moves a game entity according to a set of goals and realistic constraints.
- [GKAgent2D](gameplaykit/gkagent2d.md): An agent that operates in a two-dimensional space.
- [GKAgent3D](gameplaykit/gkagent3d.md): An agent that operates in a three-dimensional space.
- [GKGoal](gameplaykit/gkgoal.md): An influence that motivates the movement of one or more agents.
- [GKBehavior](gameplaykit/gkbehavior.md): A set of goals that together influence the movement of an agent.
- [GKCompositeBehavior](gameplaykit/gkcompositebehavior.md): A set of behaviors, each of which is a set of goals, that together influence the movement of an agent.
- [GKPath](gameplaykit/gkpath.md): A polygonal path that can be followed by an agent.
- [GKAgentDelegate](gameplaykit/gkagentdelegate.md): Implement this protocol to synchronize the state of an agent with its visual representation in your game.

### Obstacles

Classes that model impassable areas in a game world, for use with Pathfinding and Agents.

- [GKObstacle](gameplaykit/gkobstacle.md): The abstract base class for objects representing impassable areas in a game world.
- [GKCircleObstacle](gameplaykit/gkcircleobstacle.md): A circular impassable area to be avoided by agents.
- [GKSphereObstacle](gameplaykit/gksphereobstacle.md): A spherical impassable volume to be avoided by agents.
- [GKPolygonObstacle](gameplaykit/gkpolygonobstacle.md): A polygon-shaped impassable area in a 2D game world.

### Procedural Noise

Generate fields of coherent random noise, then use them to create texture images resembling natural phenomena such as clouds or wood grain, build procedural game worlds of unlimited size, and more.

- [GKNoiseSource](gameplaykit/gknoisesource.md): The abstract superclass for procedural noise generators.
- [GKNoise](gameplaykit/gknoise.md): A representation of procedural noise, generated by a noise source, that you can use to process, transform, or combine noise.
- [GKNoiseMap](gameplaykit/gknoisemap.md): A sample of procedural noise data from which you can read noise values directly or create noise textures.
- [GKCoherentNoiseSource](gameplaykit/gkcoherentnoisesource.md): The abstract superclass for procedural noise generators that create coherent noise.
- [GKBillowNoiseSource](gameplaykit/gkbillownoisesource.md): A procedural noise generator whose output is a type of fractal coherent noise with smooth features.
- [GKPerlinNoiseSource](gameplaykit/gkperlinnoisesource.md): A procedural noise generator whose output is a type of fractal coherent noise resembling natural phenomena such as clouds and terrain.
- [GKRidgedNoiseSource](gameplaykit/gkridgednoisesource.md): A procedural noise generator whose output is a type of multifractal coherent noise with sharply defined features.
- [GKVoronoiNoiseSource](gameplaykit/gkvoronoinoisesource.md): A procedural noise generator whose output (also called Worley noise or cellular noise) divides space into discrete cells surrounding random seed points.
- [GKCylindersNoiseSource](gameplaykit/gkcylindersnoisesource.md): A procedural noise generator whose output is a 3D field of concentric cylindrical shells.
- [GKSpheresNoiseSource](gameplaykit/gkspheresnoisesource.md): A procedural noise generator whose output is a 3D field of concentric spherical shells.
- [GKCheckerboardNoiseSource](gameplaykit/gkcheckerboardnoisesource.md): A procedural noise generator whose output is an alternating square pattern.
- [GKConstantNoiseSource](gameplaykit/gkconstantnoisesource.md): A procedural noise generator that outputs a field of a single constant value.

### Randomization

Robust, flexible implementations of standard algorithms that let you add unpredictability to gameplay without compromising testability.

- [GKRandom](gameplaykit/gkrandom.md): The common interface for all randomization classes in (or usable with) GameplayKit.
- [GKRandomSource](gameplaykit/gkrandomsource.md): The superclass for all basic randomization classes in GameplayKit.
- [GKARC4RandomSource](gameplaykit/gkarc4randomsource.md): A basic random number generator implementing the ARC4 algorithm, which is suitable for most gameplay mechanics.
- [GKLinearCongruentialRandomSource](gameplaykit/gklinearcongruentialrandomsource.md): A basic random number generator implementing the linear congruential generator algorithm, which is faster but less random than the default random source.
- [GKMersenneTwisterRandomSource](gameplaykit/gkmersennetwisterrandomsource.md): A basic random number generator implementing the Mersenne Twister algorithm, which is more random, but slower than the default random source.
- [GKRandomDistribution](gameplaykit/gkrandomdistribution.md): A generator for random numbers that fall within a specific range and that exhibit a specific distribution over multiple samplings.
- [GKGaussianDistribution](gameplaykit/gkgaussiandistribution.md): A generator for random numbers that follow a *Gaussian distribution* (also known as a *normal distribution*) across multiple samplings.
- [GKShuffledDistribution](gameplaykit/gkshuffleddistribution.md): A generator for random numbers that are uniformly distributed across many samplings, but where short sequences of similar values are unlikely.

### Rule Systems

Separate game design from executable code to speed up your gameplay development cycle, or implement fuzzy logic reasoning to add realistic behavior to your game.

- [GKRule](gameplaykit/gkrule.md): A rule to be used in the context of a rule system, with a predicate to be tested and an action to be executed when the test succeeds.
- [GKNSPredicateRule](gameplaykit/gknspredicaterule.md): A rule for use in a rule system that uses a Foundation [NSPredicate](foundation/nspredicate.md) object to evaluate itself.
- [GKRuleSystem](gameplaykit/gkrulesystem.md): A list of rules, together with a context for evaluating them and interpreting results, for use in constructing data-driven logic or fuzzy logic systems.

### Xcode and SpriteKit Integration

Classes and protocols to support easy creation and editing of GameplayKit features with the SpriteKit scene editor in Xcode.

- [GKScene](gameplaykit/gkscene.md): A container for associating GameplayKit objects with a SpriteKit scene.
- [GKSceneRootNodeType](gameplaykit/gkscenerootnodetype.md): Identifies scene classes from other frameworks that support embedded GameplayKit information.
- [GKSKNodeComponent](gameplaykit/gksknodecomponent.md): A component that manages a SpriteKit node.

### Reference

- [GameplayKit Constants](gameplaykit/gameplaykit-constants.md)
- [GameplayKit Structures](gameplaykit/gameplaykit-structures.md)
- [GameplayKit Enumerations](gameplaykit/gameplaykit-enumerations.md)

### Classes

- [GKSCNNodeComponent](gameplaykit/gkscnnodecomponent.md)
