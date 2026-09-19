> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/coreservices/selectorfunctionupp

# SelectorFunctionUPP

**Interface language:** Objective-C

**Framework:** Core Services  
**Kind:** Type Alias  
**Availability:** Mac Catalyst 17.0+ · macOS 10.0+

Defines a universal procedure pointer to a selector function callback.

## Declaration

```objectivec
typedef SelectorFunctionProcPtr SelectorFunctionUPP;
```

<a id="discussion"></a>

## Discussion

You can obtain a `SelectorFunctionUPP` by calling the function [NewSelectorFunctionUPP](1472304-newselectorfunctionupp.md). For more information, see [SelectorFunctionProcPtr](selectorfunctionprocptr.md).
