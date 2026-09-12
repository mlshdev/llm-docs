> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/formatter/editingstring(for:)](https://developer.apple.com/documentation/foundation/formatter/editingstring(for:))

# editingString(for:) (Swift)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default implementation of this method invokes [string(for:)](string%28for_%29.md).

## Declaration

```swift
func editingString(for obj: Any) -> String?
```

## Parameters

- `obj`: The object for which to return an editing string.

<a id="return-value"></a>

## Return Value

An `NSString` object that is used for editing the textual representation of `anObject`.

<a id="Discussion"></a>

## Discussion

When implementing a subclass, override this method only when the string that users see and the string that they edit are different. In your implementation, return an `NSString` object that is used for editing, following the logic recommended for implementing [string(for:)](string%28for_%29.md). As an example, you would implement this method if you want the dollar signs in displayed strings removed for editing.

## See Also

### Getting Textual Representations of Object Values

- [string(for:)](string%28for_%29.md): The default implementation of this method raises an exception.
- [attributedString(for:withDefaultAttributes:)](attributedstring%28for_withdefaultattributes_%29.md): The default implementation returns `nil` to indicate that the formatter object does not provide an attributed string.

# editingStringForObjectValue: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** iOS 2.0+ · iPadOS 2.0+ · Mac Catalyst 13.0+ · macOS 10.0+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

The default implementation of this method invokes [stringForObjectValue:](string%28for_%29.md).

## Declaration

```objectivec
- (NSString *) editingStringForObjectValue:(id) obj;
```

## Parameters

- `obj`: The object for which to return an editing string.

<a id="return-value"></a>

## Return Value

An `NSString` object that is used for editing the textual representation of `anObject`.

<a id="Discussion"></a>

## Discussion

When implementing a subclass, override this method only when the string that users see and the string that they edit are different. In your implementation, return an `NSString` object that is used for editing, following the logic recommended for implementing [stringForObjectValue:](string%28for_%29.md). As an example, you would implement this method if you want the dollar signs in displayed strings removed for editing.

## See Also

### Getting Textual Representations of Object Values

- [stringForObjectValue:](string%28for_%29.md): The default implementation of this method raises an exception.
- [attributedStringForObjectValue:withDefaultAttributes:](attributedstring%28for_withdefaultattributes_%29.md): The default implementation returns `nil` to indicate that the formatter object does not provide an attributed string.
