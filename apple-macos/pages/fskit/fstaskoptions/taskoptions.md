> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/fskit/fstaskoptions/taskoptions](https://developer.apple.com/documentation/fskit/fstaskoptions/taskoptions)

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
