> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsuserunixtask/standarderror](https://developer.apple.com/documentation/foundation/nsuserunixtask/standarderror)

# standardError (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard error stream.

## Declaration

```swift
var standardError: FileHandle? { get set }
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardInput](standardinput.md): The standard input stream.
- [standardOutput](standardoutput.md): The standard output stream.

# standardError (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** macOS 10.8+

The standard error stream.

## Declaration

```objectivec
@property (retain, nullable) NSFileHandle * standardError;
```

<a id="Discussion"></a>

## Discussion

Setting to `nil` will bind the stream to `/dev/null`.

The default is `nil`.

## See Also

### Standard Unix Streams

- [standardInput](standardinput.md): The standard input stream.
- [standardOutput](standardoutput.md): The standard output stream.
