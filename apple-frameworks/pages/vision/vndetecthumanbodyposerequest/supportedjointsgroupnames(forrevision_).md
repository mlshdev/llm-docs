> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodyposerequest/supportedjointsgroupnames(forrevision:)](https://developer.apple.com/documentation/vision/vndetecthumanbodyposerequest/supportedjointsgroupnames(forrevision:))

# supportedJointsGroupNames(forRevision:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the supported joint group names for a revision.

## Declaration

```swift
class func supportedJointsGroupNames(forRevision revision: Int) throws -> [VNHumanBodyPoseObservation.JointsGroupName]
```

## Parameters

- `revision`: The body pose request revision.

<a id="return-value"></a>

## Return Value

The array of joint group name objects for the revision.

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointNames(forRevision:)](supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointsGroupNames](supportedjointsgroupnames.md): Retrieves the supported joint group names.

# supportedJointsGroupNamesForRevision:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the supported joint group names for a revision.

## Declaration

```objectivec
+ (NSArray<NSString *> *) supportedJointsGroupNamesForRevision:(NSUInteger) revision error:(NSError **) error;
```

## Parameters

- `revision`: The body pose request revision.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The array of joint group name objects for the revision. On failure, this method returns `nil`.

## See Also

### Determining Supported Joints

- [supportedJointNamesForRevision:error:](supportedjointnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint names for a revision.
- [supportedJointNamesAndReturnError:](supportedjointnamesandreturnerror_.md): Retrieves the supported joint names.
- [supportedJointsGroupNamesAndReturnError:](supportedjointsgroupnamesandreturnerror_.md): Retrieves the supported joint group names.
