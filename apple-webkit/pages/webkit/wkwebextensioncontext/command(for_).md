> Snapshot-pinned source for Apple WebKit and Safari snapshot-3530be43aacd: [documentation/webkit/wkwebextensioncontext/command(for:)](https://developer.apple.com/documentation/webkit/wkwebextensioncontext/command(for:))

# command(for:) (Swift)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Retrieves the command associated with the given event without performing it.

## Declaration

```swift
func command(for event: NSEvent) -> WKWebExtension.Command?
```

## Parameters

- `event`: The event for which to retrieve the corresponding command.

<a id="return-value"></a>

## Return Value

The command associated with the event, or `nil` if there is no such command.

<a id="discussion"></a>

## Discussion

Returns the command that corresponds to the provided event, if such a command exists. This provides a way to programmatically determine what action would occur for a given event, without triggering the command.

# commandForEvent: (Objective-C)

**Framework:** WebKit  
**Kind:** Instance Method  
**Availability:** macOS 15.4+

Retrieves the command associated with the given event without performing it.

## Declaration

```objectivec
- (WKWebExtensionCommand *) commandForEvent:(NSEvent *) event;
```

## Parameters

- `event`: The event for which to retrieve the corresponding command.

<a id="return-value"></a>

## Return Value

The command associated with the event, or `nil` if there is no such command.

<a id="discussion"></a>

## Discussion

Returns the command that corresponds to the provided event, if such a command exists. This provides a way to programmatically determine what action would occur for a given event, without triggering the command.
