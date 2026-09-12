> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/vision/vntranslationalimageregistrationrequestrevision1](https://developer.apple.com/documentation/vision/vntranslationalimageregistrationrequestrevision1)

# VNTranslationalImageRegistrationRequestRevision1 (Swift)

**Framework:** Vision  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A constant for specifying revision 1 of the translational image registration request.

## Declaration

```swift
var VNTranslationalImageRegistrationRequestRevision1: Int { get }
```

<a id="Discussion"></a>

## Discussion

The revision number is a constant that you pass on a per-request basis to indicate to the Vision framework which version of the translational image registration algorithm to use for that request. Each OS release in which the framework improves aspects of the algorithm (recognition speed, accuracy, number of languages supported, and so forth), the revision number increments by 1.

By default, recognition requests use the latest—the highest—revision number for the SDK that your app links against. If you don’t recompile your app against a newer SDK, your app binary will use the revision that was the default at the time you last compiled it. If you do recompile, your app uses the default of the new SDK.

If your app must support users on older OS versions that don’t have access to the latest Vision framework, you may want to specify an earlier revision. For example, your algorithm may depend on specific behavior from a Vision request, such as writing your image processing algorithm to assume the size or aspect ratio of bounding boxes from an older revision of the face detector. In such a scenario, you can support earlier versions of the algorithm by specifying lower numbers:

**Swift**

```swift
visionRequest.revision = VNTranslationalImageRegistrationRequestRevision1
```

**Objective-C**

```objc
visionRequest.revision = VNTranslationalImageRegistrationRequestRevision1;
```

# VNTranslationalImageRegistrationRequestRevision1 (Objective-C)

**Framework:** Vision  
**Kind:** Global Variable  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.1+ · macOS 10.14+ · tvOS 12.0+ · visionOS 1.0+

A constant for specifying revision 1 of the translational image registration request.

## Declaration

```objectivec
static const NSUInteger VNTranslationalImageRegistrationRequestRevision1;
```

<a id="Discussion"></a>

## Discussion

The revision number is a constant that you pass on a per-request basis to indicate to the Vision framework which version of the translational image registration algorithm to use for that request. Each OS release in which the framework improves aspects of the algorithm (recognition speed, accuracy, number of languages supported, and so forth), the revision number increments by 1.

By default, recognition requests use the latest—the highest—revision number for the SDK that your app links against. If you don’t recompile your app against a newer SDK, your app binary will use the revision that was the default at the time you last compiled it. If you do recompile, your app uses the default of the new SDK.

If your app must support users on older OS versions that don’t have access to the latest Vision framework, you may want to specify an earlier revision. For example, your algorithm may depend on specific behavior from a Vision request, such as writing your image processing algorithm to assume the size or aspect ratio of bounding boxes from an older revision of the face detector. In such a scenario, you can support earlier versions of the algorithm by specifying lower numbers:

**Swift**

```swift
visionRequest.revision = VNTranslationalImageRegistrationRequestRevision1
```

**Objective-C**

```objc
visionRequest.revision = VNTranslationalImageRegistrationRequestRevision1;
```
