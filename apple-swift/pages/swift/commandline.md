> Snapshot-pinned source for Apple Swift snapshot-eebba30a4ab9: [documentation/swift/commandline](https://developer.apple.com/documentation/swift/commandline)

# CommandLine

**Framework:** Swift  
**Kind:** Enumeration  
**Availability:** iOS 8.0+ · iPadOS 8.0+ · Mac Catalyst 13.0+ · macOS 10.10+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

Command-line arguments for the current process.

## Declaration

```swift
@frozen enum CommandLine
```

## Topics

### Accessing Arguments

- [arguments](commandline/arguments.md): An array that provides access to this program’s command line arguments.

### Accessing Raw Argument Data

- [argc](commandline/argc.md): Access to the raw argc value from C.
- [unsafeArgv](commandline/unsafeargv.md): Access to the raw argv value from C.

## Relationships

### Conforms To

- [Sendable](sendable.md)
- [SendableMetatype](sendablemetatype.md)

## See Also

### Command Line Input

- [readLine(strippingNewline:)](readline%28strippingnewline_%29.md): Returns a string read from standard input through the end of the current line or until EOF is reached.
