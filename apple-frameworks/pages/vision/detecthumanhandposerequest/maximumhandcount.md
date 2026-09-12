> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/detecthumanhandposerequest/maximumhandcount](https://developer.apple.com/documentation/vision/detecthumanhandposerequest/maximumhandcount)

# maximumHandCount

**Framework:** Vision  
**Kind:** Instance Property  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · Mac Catalyst 18.0+ · macOS 15.0+ · tvOS 18.0+ · visionOS 2.0+

The maximum number of hands to detect in an image.

## Declaration

```swift
var maximumHandCount: Int
```

<a id="Discussion"></a>

## Discussion

The request orders detected hands by relative size, with only the largest ones having key points determined.

The default value is `2`.

## See Also

### Configuring a request

- [supportedJointNames](supportedjointnames.md): The joint names the request supports.
- [supportedJointsGroupNames](supportedjointsgroupnames.md): The joint group names the request supports.
