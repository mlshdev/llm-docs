> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsalert/init(error:)](https://developer.apple.com/documentation/appkit/nsalert/init(error:))

# init(error:) (Swift)

**Framework:** AppKit  
**Kind:** Initializer  
**Availability:** macOS

Returns an alert initialized from information in an error object.

## Declaration

```swift
init(error: any Error)
```

## Parameters

- `error`: Error information to display.

<a id="return-value"></a>

## Return Value

An initialized alert.

<a id="Discussion"></a>

## Discussion

The `NSAlert` class extracts the localized error description, recovery suggestion, and recovery options from the `error` parameter and uses them as the alert’s message text, informative text, and button titles, respectively.

# alertWithError: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns an alert initialized from information in an error object.

## Declaration

```objectivec
+ (NSAlert *) alertWithError:(NSError *) error;
```

## Parameters

- `error`: Error information to display.

<a id="return-value"></a>

## Return Value

An initialized alert.

<a id="Discussion"></a>

## Discussion

The `NSAlert` class extracts the localized error description, recovery suggestion, and recovery options from the `error` parameter and uses them as the alert’s message text, informative text, and button titles, respectively.
