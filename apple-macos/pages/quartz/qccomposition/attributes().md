> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/quartz/qccomposition/attributes()](https://developer.apple.com/documentation/quartz/qccomposition/attributes())

# attributes() (Swift)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the attributes of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```swift
func attributes() -> [AnyHashable : Any]!
```

<a id="return-value"></a>

## Return Value

A dictionary of composition attributes. See [Attribute Keys](../attribute-keys.md) for the attributes that can be returned.

## See Also

### Getting Information About a Composition

- [protocols()](protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.
- [identifier()](identifier%28%29.md): Deprecated. Returns the unique and persistent identifier for the composition from the composition repository.

# attributes (Objective-C)

**Framework:** Quartz  
**Kind:** Instance Method  
**Availability:** macOS 10.4+ (deprecated in 10.15)

Returns the attributes of the composition.

> QuartzComposer API deprecated. (Define QC_SILENCE_DEPRECATION to silence these warnings)

## Declaration

```objectivec
- (NSDictionary *) attributes;
```

<a id="return-value"></a>

## Return Value

A dictionary of composition attributes. See [Attribute Keys](../attribute-keys.md) for the attributes that can be returned.

## See Also

### Getting Information About a Composition

- [protocols](protocols%28%29.md): Deprecated. Returns the list of protocols to which the composition conforms.
- [identifier](identifier%28%29.md): Deprecated. Returns the unique and persistent identifier for the composition from the composition repository.
