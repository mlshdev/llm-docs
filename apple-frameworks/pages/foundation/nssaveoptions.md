> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nssaveoptions](https://developer.apple.com/documentation/foundation/nssaveoptions)

# NSSaveOptions (Swift)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The [saveOptions](nsclosecommand/saveoptions.md) method returns one of the following constants to indicate how to deal with saving any modified documents:

## Declaration

```swift
enum NSSaveOptions
```

## Topics

### Constants

- [NSSaveOptions.yes](nssaveoptions/yes.md): Indicates a modified document should be saved on closing without asking the user.
- [NSSaveOptions.no](nssaveoptions/no.md): Indicates a modified document should not be saved on closing.
- [NSSaveOptions.ask](nssaveoptions/ask.md): Indicates the user should be asked before saving any modified documents on closing. When no option is specified, this is the default.

### Initializers

- [init(rawValue:)](nssaveoptions/init%28rawvalue_%29.md)

## Relationships

### Conforms To

- [BitwiseCopyable](https://developer.apple.com/documentation/swift/bitwisecopyable)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [RawRepresentable](https://developer.apple.com/documentation/swift/rawrepresentable)
- [Sendable](https://developer.apple.com/documentation/swift/sendable)
- [SendableMetatype](https://developer.apple.com/documentation/swift/sendablemetatype)

# NSSaveOptions (Objective-C)

**Framework:** Foundation  
**Kind:** Enumeration  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

The [saveOptions](nsclosecommand/saveoptions.md) method returns one of the following constants to indicate how to deal with saving any modified documents:

## Declaration

```objectivec
enum NSSaveOptions : NSUInteger;
```

## Topics

### Constants

- [NSSaveOptionsYes](nssaveoptions/yes.md): Indicates a modified document should be saved on closing without asking the user.
- [NSSaveOptionsNo](nssaveoptions/no.md): Indicates a modified document should not be saved on closing.
- [NSSaveOptionsAsk](nssaveoptions/ask.md): Indicates the user should be asked before saving any modified documents on closing. When no option is specified, this is the default.
