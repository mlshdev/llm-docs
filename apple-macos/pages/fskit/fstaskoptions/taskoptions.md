> Snapshot-pinned source payload for Apple macOS snapshot-dddbaaa5d689; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/fskit/fstaskoptions/taskoptions

# taskOptions (Swift)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An array of strings that represent command-line options for the task.

## Declaration

```swift
var taskOptions: [String] { get }
```

<a id="discussion"></a>

## Discussion

This property is equivalent to the `argv` array of C strings passed to a command-line tool.

# taskOptions (Objective-C)

**Framework:** FSKit  
**Kind:** Instance Property  
**Availability:** macOS 15.4+

An array of strings that represent command-line options for the task.

## Declaration

```objectivec
@property (copy, readonly) NSArray<NSString *> * taskOptions;
```

<a id="discussion"></a>

## Discussion

This property is equivalent to the `argv` array of C strings passed to a command-line tool.
