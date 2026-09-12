> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uiapplication/shared](https://developer.apple.com/documentation/uikit/uiapplication/shared)

# shared (Swift)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The singleton app instance.

## Declaration

```swift
class var shared: UIApplication { get }
```

<a id="return-value"></a>

## Return Value

The app instance is created in the [UIApplicationMain(\_:\_:\_:\_:)](../uiapplicationmain%28________%29-1yub7.md) function.

<a id="Discussion"></a>

## Discussion

The [UIApplicationMain(\_:\_:\_:\_:)](../uiapplicationmain%28________%29-1yub7.md) function creates the shared app instance at launch time.

# sharedApplication (Objective-C)

**Framework:** UIKit  
**Kind:** Type Property  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+

The singleton app instance.

## Declaration

```objectivec
@property (class, nonatomic, readonly) UIApplication * sharedApplication;
```

<a id="return-value"></a>

## Return Value

The app instance is created in the [UIApplicationMain](../uiapplicationmain%28________%29-1yub7.md) function.

<a id="Discussion"></a>

## Discussion

The [UIApplicationMain](../uiapplicationmain%28________%29-1yub7.md) function creates the shared app instance at launch time.
