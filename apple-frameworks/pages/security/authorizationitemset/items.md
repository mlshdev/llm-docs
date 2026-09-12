> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/security/authorizationitemset/items](https://developer.apple.com/documentation/security/authorizationitemset/items)

# items (Swift)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an array of authorization items.

## Declaration

```swift
var items: UnsafeMutablePointer<AuthorizationItem>?
```

<a id="Discussion"></a>

## Discussion

If `count` is greater than `1`, `items` points to the first item in an array of such items. You should set this parameter to `NULL` if there are no items.

Ensure that the array of items does not contain duplicates because it actually represents a set.

# items (Objective-C)

**Framework:** Security  
**Kind:** Instance Property  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

A pointer to an array of authorization items.

## Declaration

```objectivec
AuthorizationItem * items;
```

<a id="Discussion"></a>

## Discussion

If `count` is greater than `1`, `items` points to the first item in an array of such items. You should set this parameter to `NULL` if there are no items.

Ensure that the array of items does not contain duplicates because it actually represents a set.
