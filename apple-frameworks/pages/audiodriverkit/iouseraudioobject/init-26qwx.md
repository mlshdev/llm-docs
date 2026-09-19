> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/audiodriverkit/iouseraudioobject/init-26qwx

# init

**Interface language:** Objective-C

**Framework:** AudioDriverKit  
**Kind:** Instance Method  
**Availability:** DriverKit 21.0+

Initializes an empty object.

## Declaration

```objectivec
virtual bool init();
```

<a id="return-value"></a>

## Return Value

A Boolean value that indicates the result of initialization: `true` if initialization succeeded, `false` otherwise.

<a id="Discussion"></a>

## Discussion

This no-arg initializer always returns `false`.

## See Also

### Creating an Audio Object

- [init](init-1ar2z.md): Initializes an instance of the audio object base class.
