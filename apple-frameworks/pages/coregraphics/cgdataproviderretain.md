> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataproviderretain](https://developer.apple.com/documentation/coregraphics/cgdataproviderretain)

# CGDataProviderRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a data provider.

## Declaration

```objectivec
extern CGDataProviderRefCGDataProviderRetain(CGDataProviderRef provider);
```

## Parameters

- `provider`: The data provider to retain.

<a id="return-value"></a>

## Return Value

The same data provider you passed in as the `provider` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `provider` parameter is `NULL`.

## See Also

### Retaining and Releasing Data Providers

- [CGDataProviderRelease](cgdataproviderrelease.md): Decrements the retain count of a data provider.
