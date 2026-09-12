> Snapshot-pinned source for Apple iOS and iPadOS snapshot-3d18b70026fe: [documentation/iad/adclienterrordomain](https://developer.apple.com/documentation/iad/adclienterrordomain)

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
