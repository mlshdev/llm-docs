> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodypose3drequest/supportedjointnamesandreturnerror:](https://developer.apple.com/documentation/vision/vndetecthumanbodypose3drequest/supportedjointnamesandreturnerror:)

# supportedJointNamesAndReturnError:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Returns the joint names the request supports.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedJointNamesAndReturnError:(NSError **) error;
```

<a id="return-value"></a>

## Return Value

The array of joint name objects.

## See Also

### Determining Supported Joints

- [supportedJointsGroupNamesAndReturnError:](supportedjointsgroupnamesandreturnerror_.md): Returns the joint group names the request supports.
