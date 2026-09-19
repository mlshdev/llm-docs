> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptcommand/appleevent

# appleEvent (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the receiver was constructed by Cocoa scripting’s built-in Apple event handling, returns the Apple event descriptor from which it was constructed.

## Declaration

```swift
@NSCopying var appleEvent: NSAppleEventDescriptor? { get }
```

<a id="Discussion"></a>

## Discussion

The effects of mutating or retaining this descriptor are undefined, although it may be copied.

# appleEvent (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

If the receiver was constructed by Cocoa scripting’s built-in Apple event handling, returns the Apple event descriptor from which it was constructed.

## Declaration

```objectivec
@property (copy, readonly, nullable) NSAppleEventDescriptor * appleEvent;
```

<a id="Discussion"></a>

## Discussion

The effects of mutating or retaining this descriptor are undefined, although it may be copied.
