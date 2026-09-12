> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/addressbook/absearchelement/init(forconjunction:children:)](https://developer.apple.com/documentation/addressbook/absearchelement/init(forconjunction:children:))

# init(forConjunction:children:) (Swift)

**Framework:** Address Book  
**Kind:** Initializer  
**Availability:** macOS

Returns a compound search element, created by combining the search elements in an array with the given conjunction.

## Declaration

```swift
init!(forConjunction conjuction: ABSearchConjunction, children: [Any]!)
```

## Parameters

- `conjuction`: The logical operator with which to combine the search elements.
- `children`: An array of search elements to be combined.

<a id="return-value"></a>

## Return Value

A compound search element, created by combining the given search elements with the given conjunction

<a id="Discussion"></a>

## Discussion

The objects in the `children` array must be `ABSearchElement` objects. The conjunction can be `kABSearchAnd` or `kABSearchOr`. If `children` is `nil` or empty, this method raises an exception.

# searchElementForConjunction:children: (Objective-C)

**Framework:** Address Book  
**Kind:** Type Method  
**Availability:** macOS

Returns a compound search element, created by combining the search elements in an array with the given conjunction.

## Declaration

```objectivec
+ (ABSearchElement *) searchElementForConjunction:(ABSearchConjunction) conjuction children:(NSArray *) children;
```

## Parameters

- `conjuction`: The logical operator with which to combine the search elements.
- `children`: An array of search elements to be combined.

<a id="return-value"></a>

## Return Value

A compound search element, created by combining the given search elements with the given conjunction

<a id="Discussion"></a>

## Discussion

The objects in the `children` array must be `ABSearchElement` objects. The conjunction can be `kABSearchAnd` or `kABSearchOr`. If `children` is `nil` or empty, this method raises an exception.
