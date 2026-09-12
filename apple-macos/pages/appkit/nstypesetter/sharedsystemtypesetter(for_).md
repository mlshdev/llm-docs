> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nstypesetter/sharedsystemtypesetter(for:)](https://developer.apple.com/documentation/appkit/nstypesetter/sharedsystemtypesetter(for:))

# sharedSystemTypesetter(for:) (Swift)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

## Declaration

```swift
class func sharedSystemTypesetter(for behavior: NSLayoutManager.TypesetterBehavior) -> Any
```

## Parameters

- `behavior`: The desired behavior.

<a id="return-value"></a>

## Return Value

A shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

<a id="Discussion"></a>

## Discussion

Possible return values are described in the [NSLayoutManager.TypesetterBehavior](../nslayoutmanager/typesetterbehavior-swift.enum.md) section for [NSLayoutManager](../nslayoutmanager.md).

## See Also

### Related Documentation

- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.

### Getting a typesetter

- [sharedSystemTypesetter](sharedsystemtypesetter.md): Returns a shared instance of a reentrant typesetter.

# sharedSystemTypesetterForBehavior: (Objective-C)

**Framework:** AppKit  
**Kind:** Type Method  
**Availability:** macOS

Returns a shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

## Declaration

```objectivec
+ (id) sharedSystemTypesetterForBehavior:(NSTypesetterBehavior) behavior;
```

## Parameters

- `behavior`: The desired behavior.

<a id="return-value"></a>

## Return Value

A shared instance of a reentrant typesetter that implements typesetting with the specified behavior.

<a id="Discussion"></a>

## Discussion

Possible return values are described in the [NSTypesetterBehavior](../nslayoutmanager/typesetterbehavior-swift.enum.md) section for [NSLayoutManager](../nslayoutmanager.md).

## See Also

### Related Documentation

- [typesetterBehavior](typesetterbehavior.md): Returns the current typesetter behavior.

### Getting a typesetter

- [sharedSystemTypesetter](sharedsystemtypesetter.md): Returns a shared instance of a reentrant typesetter.
