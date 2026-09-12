> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/mapkit/mkcircleview/initwithcircle:](https://developer.apple.com/documentation/mapkit/mkcircleview/initwithcircle:)

# initWithCircle:

**Interface language:** Objective-C

**Framework:** MapKit  
**Kind:** Instance Method  
**Availability:** iOS 4.0+ (deprecated in 7.0) · iPadOS 4.0+ (deprecated in 7.0) · Mac Catalyst 13.1+ (deprecated in 13.1)

Initializes and returns a new overlay view using the specified circle overlay object.

> Use the [MKCircleRenderer](../mkcirclerenderer.md) class instead.

## Declaration

```objectivec
- (instancetype) initWithCircle:(MKCircle *) circle;
```

## Parameters

- `circle`: The circle overlay containing the information about the circular area to be drawn.

<a id="return-value"></a>

## Return Value

A new circle overlay view.

## See Also

### Related Documentation

- [Location and Maps Programming Guide](https://developer.apple.com/library/archive/documentation/UserExperience/Conceptual/LocationAwarenessPG/Introduction/Introduction.html#//apple_ref/doc/uid/TP40009497)
