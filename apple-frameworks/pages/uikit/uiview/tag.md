> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiview/tag](https://developer.apple.com/documentation/uikit/uiview/tag)

# tag (Swift)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An integer that you can use to identify view objects in your application.

## Declaration

```swift
var tag: Int { get set }
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. You can set the value of this tag and use that value to identify the view later.

## See Also

### Identifying the view at runtime

- [viewWithTag(\_:)](viewwithtag%28__%29.md): Returns the view whose tag matches the specified value.

# tag (Objective-C)

**Framework:** UIKit  
**Kind:** Instance Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

An integer that you can use to identify view objects in your application.

## Declaration

```objectivec
@property (nonatomic) NSInteger tag;
```

<a id="Discussion"></a>

## Discussion

The default value is `0`. You can set the value of this tag and use that value to identify the view later.

## See Also

### Identifying the view at runtime

- [viewWithTag:](viewwithtag%28__%29.md): Returns the view whose tag matches the specified value.
