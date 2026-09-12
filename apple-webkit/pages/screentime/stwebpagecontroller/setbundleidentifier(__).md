> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/screentime/stwebpagecontroller/setbundleidentifier(_:)](https://developer.apple.com/documentation/screentime/stwebpagecontroller/setbundleidentifier(_:))

# setBundleIdentifier(\_:) (Swift)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Changes the bundle identifier used to report web usage.

## Declaration

```swift
func setBundleIdentifier(_ bundleIdentifier: String) throws
```

## Parameters

- `bundleIdentifier`: The bundle identifier that can be changed to facilitate web usage reporting for a parent web browser from one of its helper processes or extensions.

<a id="discussion"></a>

## Discussion

This is only supported for web browsers that have been properly registered with Screen Time.

# setBundleIdentifier:error: (Objective-C)

**Framework:** Screen Time  
**Kind:** Instance Method  
**Availability:** iOS 14.0+ · iPadOS 14.0+ · Mac Catalyst 14.0+ · macOS 11.0+

Changes the bundle identifier used to report web usage.

## Declaration

```objectivec
- (BOOL) setBundleIdentifier:(NSString *) bundleIdentifier error:(NSError **) error;
```

## Parameters

- `bundleIdentifier`: The bundle identifier that can be changed to facilitate web usage reporting for a parent web browser from one of its helper processes or extensions.
- `error`: Any error that occurred while changing the bundle identifier.

<a id="return-value"></a>

## Return Value

`YES` if the method succeeded, otherwise `NO`.

<a id="discussion"></a>

## Discussion

This is only supported for web browsers that have been properly registered with Screen Time.
