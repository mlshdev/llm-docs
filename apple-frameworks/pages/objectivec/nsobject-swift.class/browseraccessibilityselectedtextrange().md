> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/objectivec/nsobject-swift.class/browseraccessibilityselectedtextrange()](https://developer.apple.com/documentation/objectivec/nsobject-swift.class/browseraccessibilityselectedtextrange())

# browserAccessibilitySelectedTextRange() (Swift)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

Returns the range of selected text in the element.

## Declaration

```swift
func browserAccessibilitySelectedTextRange() -> NSRange
```

<a id="return-value"></a>

## Return Value

The selection’s range. If there’s no selection, returns `(0,` [NSNotFound](../../foundation/nsnotfound-4qp9h.md)`)`.

## See Also

### Improving browser accessibility

- [browserAccessibilityAttributedValue(in:)](browseraccessibilityattributedvalue%28in_%29.md): Returns the value for this element within the given range, as an attributed string.
- [browserAccessibilityDeleteTextAtCursor(numberOfCharacters:)](browseraccessibilitydeletetextatcursor%28numberofcharacters_%29.md): Deletes text from the element at the current cursor position.
- [browserAccessibilityInsertTextAtCursor(text:)](browseraccessibilityinserttextatcursor%28text_%29.md): Inserts text into the element at the current cursor position.
- [browserAccessibilitySetSelectedTextRange(\_:)](browseraccessibilitysetselectedtextrange%28__%29.md): Updates the element’s selected text.
- [browserAccessibilityValue(in:)](browseraccessibilityvalue%28in_%29.md): Returns this element’s value in the given range.
- [browserAccessibilityContainerType](browseraccessibilitycontainertype.md): The kind of container that contains this element.
- [browserAccessibilityCurrentStatus](browseraccessibilitycurrentstatus.md): A string that’s the element’s value for aria-current.
- [browserAccessibilityHasDOMFocus](browseraccessibilityhasdomfocus.md): A Boolean value that indicates whether the element has native focus in the browser Document Object Model.
- [browserAccessibilityIsRequired](browseraccessibilityisrequired.md): A Boolean value that’s the element’s value for aria-required.
- [browserAccessibilityPressedState](browseraccessibilitypressedstate.md): The element’s value for aria-pressed.
- [browserAccessibilityRoleDescription](browseraccessibilityroledescription.md): A string that describes the element’s role for assistive technologies.
- [browserAccessibilitySortDirection](browseraccessibilitysortdirection.md): A string that’s the element’s value for aria-sort.

# browserAccessibilitySelectedTextRange (Objective-C)

**Framework:** Objective-C Runtime  
**Kind:** Instance Method  
**Availability:** iOS 18.0+ · iPadOS 18.0+ · macOS · tvOS 18.0+ · visionOS 2.0+

Returns the range of selected text in the element.

## Declaration

```objectivec
- (NSRange) browserAccessibilitySelectedTextRange;
```

<a id="return-value"></a>

## Return Value

The selection’s range. If there’s no selection, returns `(0,` [NSNotFound](../../foundation/nsnotfound-4qp9h.md)`)`.

## See Also

### Improving browser accessibility

- [browserAccessibilityAttributedValueInRange:](browseraccessibilityattributedvalue%28in_%29.md): Returns the value for this element within the given range, as an attributed string.
- [browserAccessibilityDeleteTextAtCursor:](browseraccessibilitydeletetextatcursor%28numberofcharacters_%29.md): Deletes text from the element at the current cursor position.
- [browserAccessibilityInsertTextAtCursor:](browseraccessibilityinserttextatcursor%28text_%29.md): Inserts text into the element at the current cursor position.
- [browserAccessibilitySetSelectedTextRange:](browseraccessibilitysetselectedtextrange%28__%29.md): Updates the element’s selected text.
- [browserAccessibilityValueInRange:](browseraccessibilityvalue%28in_%29.md): Returns this element’s value in the given range.
- [browserAccessibilityContainerType](browseraccessibilitycontainertype.md): The kind of container that contains this element.
- [browserAccessibilityCurrentStatus](browseraccessibilitycurrentstatus.md): A string that’s the element’s value for aria-current.
- [browserAccessibilityHasDOMFocus](browseraccessibilityhasdomfocus.md): A Boolean value that indicates whether the element has native focus in the browser Document Object Model.
- [browserAccessibilityIsRequired](browseraccessibilityisrequired.md): A Boolean value that’s the element’s value for aria-required.
- [browserAccessibilityPressedState](browseraccessibilitypressedstate.md): The element’s value for aria-pressed.
- [browserAccessibilityRoleDescription](browseraccessibilityroledescription.md): A string that describes the element’s role for assistive technologies.
- [browserAccessibilitySortDirection](browseraccessibilitysortdirection.md): A string that’s the element’s value for aria-sort.
