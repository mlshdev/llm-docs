> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/identitylookup/ilclassificationresponse/action

# action (Swift)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A classification that determines what action the system takes.

## Declaration

```swift
var action: ILClassificationAction { get }
```

## See Also

### Accessing Data

- [userInfo](userinfo.md): JSON data included in a response sent over the network.
- [userString](userstring.md): Text included in a response sent over SMS.

# action (Objective-C)

**Framework:** SMS and Call Reporting  
**Kind:** Instance Property  
**Availability:** iOS 12.0+ · iPadOS 12.0+ · Mac Catalyst 13.0+ · visionOS 1.0+

A classification that determines what action the system takes.

## Declaration

```objectivec
@property (nonatomic, assign, readonly) ILClassificationAction action;
```

## See Also

### Accessing Data

- [userInfo](userinfo.md): JSON data included in a response sent over the network.
- [userString](userstring.md): Text included in a response sent over SMS.
