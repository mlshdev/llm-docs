> Snapshot-pinned source for Apple macOS snapshot-0b0d8b1a4a77: [documentation/appkit/nssearchfielddelegate](https://developer.apple.com/documentation/appkit/nssearchfielddelegate)

# NSSearchFieldDelegate (Swift)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a search field delegate can use to determine when a search started or ended.

## Declaration

```swift
protocol NSSearchFieldDelegate : NSTextFieldDelegate
```

## Topics

### Detecting the Start and End of a Search

- [searchFieldDidStartSearching(\_:)](nssearchfielddelegate/searchfielddidstartsearching%28__%29.md): The method that is called when the search field begins searching for content.
- [searchFieldDidEndSearching(\_:)](nssearchfielddelegate/searchfielddidendsearching%28__%29.md): The method that is called when the search field has ended its search for content.

## Relationships

### Inherits From

- [NSControlTextEditingDelegate](nscontroltexteditingdelegate.md)
- [NSObjectProtocol](https://developer.apple.com/documentation/objectivec/nsobjectprotocol)
- [NSTextFieldDelegate](nstextfielddelegate.md)

## See Also

### Managing Search

- [delegate](nssearchfield/delegate.md): The delegate for the search field, or `nil` if the search field doesn’t have a delegate.

# NSSearchFieldDelegate (Objective-C)

**Framework:** AppKit  
**Kind:** Protocol  
**Availability:** macOS

A protocol that a search field delegate can use to determine when a search started or ended.

## Declaration

```objectivec
@protocol NSSearchFieldDelegate <NSTextFieldDelegate>
```

## Topics

### Detecting the Start and End of a Search

- [searchFieldDidStartSearching:](nssearchfielddelegate/searchfielddidstartsearching%28__%29.md): The method that is called when the search field begins searching for content.
- [searchFieldDidEndSearching:](nssearchfielddelegate/searchfielddidendsearching%28__%29.md): The method that is called when the search field has ended its search for content.

## Relationships

### Inherits From

- [NSTextFieldDelegate](nstextfielddelegate.md)

## See Also

### Managing Search

- [delegate](nssearchfield/delegate.md): The delegate for the search field, or `nil` if the search field doesn’t have a delegate.
