> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/init(bundleidentifier:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/init(bundleidentifier:))

# init(bundleIdentifier:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified bundle identifier.

## Declaration

```swift
init(bundleIdentifier: String)
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.

# descriptorWithBundleIdentifier: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified bundle identifier.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) descriptorWithBundleIdentifier:(NSString *) bundleIdentifier;
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.
