> Snapshot-pinned source payload for Apple cross-platform frameworks snapshot-c3455ae26d89; integrity is recorded in the provenance manifest.
> Canonical documentation: https://developer.apple.com/documentation/tvservices/tvtopshelfnamedattribute/init(name:values:)

# init(name:values:) (Swift)

**Framework:** TV Services  
**Kind:** Initializer  
**Availability:** tvOS 13.0+

Creates a new named attribute object with the specified values.

## Declaration

```swift
init(name: String, values: [String])
```

## Parameters

- `name`: The localized name of the attribute.
- `values`: An array of strings containing the attribute values.

<a id="return-value"></a>

## Return Value

A new named attribute object.

# initWithName:values: (Objective-C)

**Framework:** TV Services  
**Kind:** Instance Method  
**Availability:** tvOS 13.0+

Creates a new named attribute object with the specified values.

## Declaration

```objectivec
- (instancetype) initWithName:(NSString *) name values:(NSArray<NSString *> *) values;
```

## Parameters

- `name`: The localized name of the attribute.
- `values`: An array of strings containing the attribute values.

<a id="return-value"></a>

## Return Value

A new named attribute object.
