> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/applicationservices/1560541-parametric_types

# Parametric Types

**Interface language:** Objective-C

**Framework:** Application Services  
**Kind:** Enumeration  
**Availability:** macOS 10.1+

Specify a parametric curve type enumeration,

## Declaration

```objectivec
enum : unsigned int {
    ...
};
```

## Topics

### Constants

- [cmParametricType0](1560541-parametric_types/cmparametrictype0.md): Y = X^gamma
- [cmParametricType1](1560541-parametric_types/cmparametrictype1.md): Y = (aX+b)^gamma \[X\>=-b/a\], Y = 0 \[X\<-b/a\]
- [cmParametricType2](1560541-parametric_types/cmparametrictype2.md): Y = (aX+b)^gamma + c \[X\>=-b/a\], Y = c \[X\<-b/a\]
- [cmParametricType3](1560541-parametric_types/cmparametrictype3.md): Y = (aX+b)^gamma \[X\>=d\], Y = cX \[X\<d\]
- [cmParametricType4](1560541-parametric_types/cmparametrictype4.md): Y = (aX+b)^gamma + e \[X\>=d\], Y = cX+f \[X\<d\]
