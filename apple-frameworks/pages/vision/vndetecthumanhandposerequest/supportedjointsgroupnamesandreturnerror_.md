> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanhandposerequest/supportedjointsgroupnamesandreturnerror:](https://developer.apple.com/documentation/vision/vndetecthumanhandposerequest/supportedjointsgroupnamesandreturnerror:)

# supportedJointsGroupNamesAndReturnError:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Retrieves the supported joint group names.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedJointsGroupNamesAndReturnError:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, an error object that describes the error; otherwise, `nil`.

## See Also

### Determining Supported Joints

- [supportedJointNamesForRevision:error:](supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNamesForRevision:error:](supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
- [supportedJointNamesAndReturnError:](supportedjointnamesandreturnerror_.md): Retrieves the supported joint names.
