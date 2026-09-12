> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/userdefaults/register(defaults:)](https://developer.apple.com/documentation/foundation/userdefaults/register(defaults:))

# register(defaults:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the set of default settings and values to use as a fallback in cases where the app domain doesn’t have them.

## Declaration

```swift
func register(defaults registrationDictionary: [String : Any])
```

## Parameters

- `registrationDictionary`: The dictionary of key-value pairs that contain the default values for your app’s settings. Build this dictionary programmatically or load it from a property list resource file in your app’s bundle.

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

Call this method shortly after launch to specify the default values for your app’s settings. This method assigns the key-value pairs you provide to the registration domain, which is typically the last domain in the search list. The registration domain is volatile, so you must register the set of default values each time your app launches.

# registerDefaults: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Specifies the set of default settings and values to use as a fallback in cases where the app domain doesn’t have them.

## Declaration

```objectivec
- (void) registerDefaults:(NSDictionary<NSString *,id> *) registrationDictionary;
```

## Parameters

- `registrationDictionary`: The dictionary of key-value pairs that contain the default values for your app’s settings. Build this dictionary programmatically or load it from a property list resource file in your app’s bundle.

## Mentioned In

- [Accessing settings from your code](../accessing-settings-from-your-code.md)

<a id="discussion"></a>

## Discussion

Call this method shortly after launch to specify the default values for your app’s settings. This method assigns the key-value pairs you provide to the registration domain, which is typically the last domain in the search list. The registration domain is volatile, so you must register the set of default values each time your app launches.
