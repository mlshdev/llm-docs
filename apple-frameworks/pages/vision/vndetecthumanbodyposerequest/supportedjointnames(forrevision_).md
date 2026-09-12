> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vndetecthumanbodyposerequest/supportedjointnames(forrevision:)](https://developer.apple.com/documentation/vision/vndetecthumanbodyposerequest/supportedjointnames(forrevision:))

# supportedJointNames(forRevision:) (Swift)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the supported joint names for a revision.

## Declaration

```swift
class func supportedJointNames(forRevision revision: Int) throws -> [VNHumanBodyPoseObservation.JointName]
```

## Parameters

- `revision`: The body pose request revision.

<a id="return-value"></a>

## Return Value

The array of joint name objects for the specified revision.

## See Also

### Determining Supported Joints

- [supportedJointNames](supportedjointnames.md): Retrieves the supported joint names.
- [supportedJointsGroupNames](supportedjointsgroupnames.md): Retrieves the supported joint group names.
- [supportedJointsGroupNames(forRevision:)](supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.

# supportedJointNamesForRevision:error: (Objective-C)

**Framework:** Vision  
**Kind:** Type Method  
**Availability:** iOS 14.0+ (deprecated in 17.0) · iPadOS 14.0+ (deprecated in 17.0) · Mac Catalyst 14.0+ (deprecated in 17.0) · macOS 11.0+ (deprecated in 14.0) · tvOS 14.0+ (deprecated in 17.0) · visionOS 1.0+ (deprecated in 1.0)

Retrieves the supported joint names for a revision.

## Declaration

```objectivec
+ (NSArray<NSString *> *) supportedJointNamesForRevision:(NSUInteger) revision error:(NSError **) error;
```

## Parameters

- `revision`: The body pose request revision.
- `error`: On output, a pointer to an error object that describes why the method failed, or `nil` if no error occurred. If you are not interested in the error information, pass `nil` for this parameter.

<a id="return-value"></a>

## Return Value

The array of joint name objects for the specified revision. On failure, this method returns `nil`.

## See Also

### Determining Supported Joints

- [supportedJointsGroupNamesForRevision:error:](supportedjointsgroupnames%28forrevision_%29.md): Deprecated. Retrieves the supported joint group names for a revision.
- [supportedJointNamesAndReturnError:](supportedjointnamesandreturnerror_.md): Retrieves the supported joint names.
- [supportedJointsGroupNamesAndReturnError:](supportedjointsgroupnamesandreturnerror_.md): Retrieves the supported joint group names.
