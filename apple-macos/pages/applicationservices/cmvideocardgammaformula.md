> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/applicationservices/cmvideocardgammaformula](https://developer.apple.com/documentation/applicationservices/cmvideocardgammaformula)

# CMVideoCardGammaFormula

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Structure  
**Availability:** macOS 10.0+ (deprecated in 10.6)

## Declaration

```objectivec
typedef struct CMVideoCardGammaFormula {
    ...
} CMVideoCardGammaFormula;
```

<a id="overview"></a>

## Overview

The ColorSync Manager defines the `CMVideoCardGammaFormula` data structure to specify video card gamma data by providing three values each for red, blue and green gamma. The values represent the actual gamma, the minimum gamma, and the maximum gamma for each color. Specifying video gamma information by formula takes less space than specifying it with a table, but the results may be less precise.

## Topics

### Instance Properties

- [blueGamma](cmvideocardgammaformula/1560125-bluegamma.md): Deprecated. The gamma value for blue. It must be greater than 0.0.
- [blueMax](cmvideocardgammaformula/1560504-bluemax.md): Deprecated. The maximum gamma value for blue. It must be greater than 0.0 and less than 1.0.
- [blueMin](cmvideocardgammaformula/1560213-bluemin.md): Deprecated. The minimum gamma value for blue. It must be greater than 0.0 and less than 1.0.
- [greenGamma](cmvideocardgammaformula/1560602-greengamma.md): Deprecated. The gamma value for green. It must be greater than 0.0.
- [greenMax](cmvideocardgammaformula/1560457-greenmax.md): Deprecated. The maximum gamma value for green. It must be greater than 0.0 and less than 1.0.
- [greenMin](cmvideocardgammaformula/1560184-greenmin.md): Deprecated. The minimum gamma value for green. It must be greater than 0.0 and less than 1.0.
- [redGamma](cmvideocardgammaformula/1560204-redgamma.md): Deprecated. The gamma value for red. It must be greater than 0.0.
- [redMax](cmvideocardgammaformula/1560106-redmax.md): Deprecated. The maximum gamma value for red. It must be greater than 0.0 and less than 1.0.
- [redMin](cmvideocardgammaformula/1560287-redmin.md): Deprecated. The minimum gamma value for red. It must be greater than 0.0 and less than 1.0.
