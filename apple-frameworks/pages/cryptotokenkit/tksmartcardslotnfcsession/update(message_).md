> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/cryptotokenkit/tksmartcardslotnfcsession/update(message:)](https://developer.apple.com/documentation/cryptotokenkit/tksmartcardslotnfcsession/update(message:))

# update(message:) (Swift)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Updates the message of the system-presented NFC UI.

## Declaration

```swift
func update(message: String) throws
```

## Parameters

- `message`: Message that should be displayed

# updateWithMessage:error: (Objective-C)

**Framework:** CryptoTokenKit  
**Kind:** Instance Method  
**Availability:** iOS 26.0+ · iPadOS 26.0+ · Mac Catalyst 26.0+ · visionOS 26.0+

Updates the message of the system-presented NFC UI.

## Declaration

```objectivec
- (BOOL) updateWithMessage:(NSString *) message error:(NSError **) error;
```

## Parameters

- `message`: Message that should be displayed
- `error`: Specific error describing why the operation failed

<a id="return-value"></a>

## Return Value

Returns `YES` if the alert message was updated, `NO` if an error occured.
