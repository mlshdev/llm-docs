> Snapshot-pinned source payload for Apple iOS and iPadOS snapshot-5fac215cc84f; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/iad/adclienterrordomain

# ADClientErrorDomain

**Interface language:** Objective-C

**Framework:** iAd  
**Kind:** Global Variable

The error domain that passes to the completion handler.

## Declaration

```objectivec
extern NSString * const ADClientErrorDomain;
```

<a id="Discussion"></a>

## Discussion

After [ADClient](adclient.md), `NSErrors` from the `ADClientErrorDomain` are passed to the completion handler.

## See Also

### Attribution Errors

- [ADClientError](adclienterror.md): Deprecated.
