> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/coregraphics/cgdataconsumerretain](https://developer.apple.com/documentation/coregraphics/cgdataconsumerretain)

# CGDataConsumerRetain

**Interface language:** Objective-C

**Framework:** Core Graphics  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.0+ · tvOS · visionOS 1.0+ · watchOS 2.0+

Increments the retain count of a data consumer.

## Declaration

```objectivec
extern CGDataConsumerRefCGDataConsumerRetain(CGDataConsumerRef consumer);
```

## Parameters

- `consumer`: The data consumer to retain.

<a id="return-value"></a>

## Return Value

The same data consumer you passed in as the `consumer` parameter.

<a id="Discussion"></a>

## Discussion

This function is equivalent to [CFRetain](../corefoundation/cfretain.md), except that it does not cause an error if the `consumer` parameter is `NULL`.

## See Also

### Retaining and Releasing Data Consumers

- [CGDataConsumerRelease](cgdataconsumerrelease.md): Decrements the retain count of a data consumer.
