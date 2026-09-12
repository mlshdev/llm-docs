> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask/standardinput](https://developer.apple.com/documentation/foundation/nsuserunixtask/standardinput)

# standardInput (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard input stream.

## Declaration

```swift
var standardInput: FileHandle? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardError](standarderror.md): The standard error stream.
- [standardOutput](standardoutput.md): The standard output stream.

# standardInput (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard input stream.

## Declaration

```objectivec
@property (retain, nullable) NSFileHandle * standardInput;
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardError](standarderror.md): The standard error stream.
- [standardOutput](standardoutput.md): The standard output stream.
