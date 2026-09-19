> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsuserunixtask/standardinput

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
