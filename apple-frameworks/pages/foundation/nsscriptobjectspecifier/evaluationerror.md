> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/foundation/nsscriptobjectspecifier/evaluationerror

# evaluationError (Swift)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object specifier in which an evaluation error occurred.

## Declaration

```swift
var evaluationError: NSScriptObjectSpecifier? { get }
```

<a id="return-value"></a>

## Return Value

The object specifier in which an evaluation error occurred.

<a id="Discussion"></a>

## Discussion

The object specifier failing to evaluate could be the receiver or any container specifier “above” the receiver.

## See Also

### Getting evaluation errors

- [evaluationErrorNumber](evaluationerrornumber.md): Sets the value of the evaluation error.

# evaluationErrorSpecifier (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns the object specifier in which an evaluation error occurred.

## Declaration

```objectivec
@property (retain, readonly, nullable) NSScriptObjectSpecifier * evaluationErrorSpecifier;
```

<a id="return-value"></a>

## Return Value

The object specifier in which an evaluation error occurred.

<a id="Discussion"></a>

## Discussion

The object specifier failing to evaluate could be the receiver or any container specifier “above” the receiver.

## See Also

### Getting evaluation errors

- [evaluationErrorNumber](evaluationerrornumber.md): Sets the value of the evaluation error.
