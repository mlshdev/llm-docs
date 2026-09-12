> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/quartzcore/catransform3dinvert(_:)](https://developer.apple.com/documentation/quartzcore/catransform3dinvert(_:))

# CATransform3DInvert(\_:) (Swift)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inverts `t` and returns the result.

## Declaration

```swift
func CATransform3DInvert(_ t: CATransform3D) -> CATransform3D
```

<a id="Discussion"></a>

## Discussion

Returns the original matrix if `t` has no inverse.

# CATransform3DInvert (Objective-C)

**Framework:** Core Animation  
**Kind:** Function  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · macOS 10.5+ · tvOS 9.0+ · visionOS 1.0+

Inverts `t` and returns the result.

## Declaration

```objectivec
extern CATransform3D CATransform3DInvert(CATransform3D t);
```

<a id="Discussion"></a>

## Discussion

Returns the original matrix if `t` has no inverse.
