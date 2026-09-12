> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsappleeventdescriptor/init(applicationurl:)](https://developer.apple.com/documentation/foundation/nsappleeventdescriptor/init(applicationurl:))

# init(applicationURL:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified application URL.

## Declaration

```swift
init(applicationURL: URL)
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.

# descriptorWithApplicationURL: (Objective-C)

**Framework:** Foundation  
**Kind:** Type Method  
**Availability:** macOS 10.11+

Creates and returns an application address descriptor using the specified application URL.

## Declaration

```objectivec
+ (NSAppleEventDescriptor *) descriptorWithApplicationURL:(NSURL *) applicationURL;
```

<a id="discussion"></a>

## Discussion

The result is suitable for use as the `targetDescriptor` parameter of `+appleEventWithEventClass:eventID:targetDescriptor:returnID:transactionID:`.
