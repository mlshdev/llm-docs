> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nsappearance/bestmatch(from:)](https://developer.apple.com/documentation/appkit/nsappearance/bestmatch(from:))

# bestMatch(from:) (Swift)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Returns the appearance name that most closely matches the current appearance object.

## Declaration

```swift
func bestMatch(from appearances: [NSAppearance.Name]) -> NSAppearance.Name?
```

## Parameters

- `appearances`: An array of appearance names, representing the appearances that your app supports.

<a id="return-value"></a>

## Return Value

The name of the appearance that most closely matches the current appearance object.

<a id="Discussion"></a>

## Discussion

You can use this method in situations where your app doesn’t fully support the current appearance, but supports a different appearance object that has similar qualities. This method returns the name from the `appearances` array that comes closest to matching the current appearance object’s attributes.

# bestMatchFromAppearancesWithNames: (Objective-C)

**Framework:** AppKit  
**Kind:** Instance Method  
**Availability:** macOS 10.14+

Returns the appearance name that most closely matches the current appearance object.

## Declaration

```objectivec
- (NSAppearanceName) bestMatchFromAppearancesWithNames:(NSArray<NSString *> *) appearances;
```

## Parameters

- `appearances`: An array of appearance names, representing the appearances that your app supports.

<a id="return-value"></a>

## Return Value

The name of the appearance that most closely matches the current appearance object.

<a id="Discussion"></a>

## Discussion

You can use this method in situations where your app doesn’t fully support the current appearance, but supports a different appearance object that has similar qualities. This method returns the name from the `appearances` array that comes closest to matching the current appearance object’s attributes.
