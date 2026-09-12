> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask/standardoutput](https://developer.apple.com/documentation/foundation/nsuserunixtask/standardoutput)

# standardOutput (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard output stream.

## Declaration

```swift
var standardOutput: FileHandle? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardError](standarderror.md): The standard error stream.
- [standardInput](standardinput.md): The standard input stream.

# standardOutput (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard output stream.

## Declaration

```objectivec
@property (retain, nullable) NSFileHandle * standardOutput;
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardError](standarderror.md): The standard error stream.
- [standardInput](standardinput.md): The standard input stream.
