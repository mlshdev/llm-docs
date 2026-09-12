> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetectanimalbodyposerequest/supportedjointnamesandreturnerror:](https://developer.apple.com/documentation/vision/vndetectanimalbodyposerequest/supportedjointnamesandreturnerror:)

# supportedJointNamesAndReturnError:

**Interface language:** Objective-C

**Framework:** Vision  
**Kind:** Instance Method  
**Availability:** iOS 17.0+ · iPadOS 17.0+ · Mac Catalyst 17.0+ · macOS 14.0+ · tvOS 17.0+ · visionOS 1.0+

Retrieves the joint names the request supports.

## Declaration

```objectivec
- (NSArray<NSString *> *) supportedJointNamesAndReturnError:(NSError **) error;
```

## Parameters

- `error`: If an error occurs, an object that describes the error; otherwise, `nil`.

<a id="return-value"></a>

## Return Value

The array of joint names.

## See Also

### Determining Supported Joints

- [supportedJointsGroupNamesAndReturnError:](supportedjointsgroupnamesandreturnerror_.md): Retrieves the joint group names the request supports.
