> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/uikit/uistoryboard/init(name:bundle:)](https://developer.apple.com/documentation/uikit/uistoryboard/init(name:bundle:))

# init(name:bundle:) (Swift)

**Framework:** UIKit  
**Kind:** Initializer  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a storyboard object for the specified resource file.

## Declaration

```swift
init(name: String, bundle storyboardBundleOrNil: Bundle?)
```

## Parameters

- `name`: The name of the storyboard resource file without the filename extension. This method raises an exception if this parameter is `nil`.
- `storyboardBundleOrNil`: The bundle containing the storyboard file and its related resources. If you specify `nil`, this method looks in the main bundle of the current application.

<a id="return-value"></a>

## Return Value

A storyboard object for the specified file. If no storyboard resource file matching `name` exists, an exception is thrown with description: `Could not find a storyboard named 'XXXXXX' in bundle...`.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the storyboard object containing the view controller graph you want to access. All of the resources associated with the storyboard must be in the bundle indicated by the `storyboardBundleOrNil` parameter.

# storyboardWithName:bundle: (Objective-C)

**Framework:** UIKit  
**Kind:** Type Method  
**Availability:** iOS 5.0+ · iPadOS 5.0+ · Mac Catalyst 13.1+ · tvOS · visionOS 1.0+ (deprecated in 1.0)

Creates and returns a storyboard object for the specified resource file.

## Declaration

```objectivec
+ (UIStoryboard *) storyboardWithName:(NSString *) name bundle:(NSBundle *) storyboardBundleOrNil;
```

## Parameters

- `name`: The name of the storyboard resource file without the filename extension. This method raises an exception if this parameter is `nil`.
- `storyboardBundleOrNil`: The bundle containing the storyboard file and its related resources. If you specify `nil`, this method looks in the main bundle of the current application.

<a id="return-value"></a>

## Return Value

A storyboard object for the specified file. If no storyboard resource file matching `name` exists, an exception is thrown with description: `Could not find a storyboard named 'XXXXXX' in bundle...`.

<a id="Discussion"></a>

## Discussion

Use this method to retrieve the storyboard object containing the view controller graph you want to access. All of the resources associated with the storyboard must be in the bundle indicated by the `storyboardBundleOrNil` parameter.
