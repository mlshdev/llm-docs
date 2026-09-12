> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/progressmanager/property/defaultvalue](https://developer.apple.com/documentation/foundation/progressmanager/property/defaultvalue)

# defaultValue

**Framework:** Foundation  
**Kind:** Type Property  
**Availability:** iOS 27.0+ · iPadOS 27.0+ · Mac Catalyst 27.0+ · macOS 27.0+ · tvOS 27.0+ · visionOS 27.0+ · watchOS 27.0+

The default value to return when property is not set to a specific value.

## Declaration

```swift
static var defaultValue: Self.Value { get }
```

<a id="return-value"></a>

## Return Value

The default value for this property type.

<a id="discussion"></a>

## Discussion

This value is used when a progress manager doesn’t have an explicit value set for this property type.
