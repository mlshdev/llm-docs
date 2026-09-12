> Snapshot-pinned source for Apple Xcode and developer tools snapshot-ef15f2517b3c: [documentation/xctest/xctnspredicateexpectation/init(predicate:object:)](https://developer.apple.com/documentation/xctest/xctnspredicateexpectation/init(predicate:object:))

# init(predicate:object:) (Swift)

**Framework:** XCTest  
**Kind:** Initializer

Creates an expectation that’s fulfilled when an `NSPredicate` instance returns `true`, optionally for a provided object.

## Declaration

```swift
init(predicate: NSPredicate, object: Any?)
```

## Parameters

- `predicate`: The predicate to evaluate.
- `object`: An optional object XCTest evaluates the predicate against.

<a id="Discussion"></a>

## Discussion

When you use an instance of this class from Swift and await using [fulfillment(of:timeout:enforceOrder:)](../xctestcase/fulfillment%28of_timeout_enforceorder_%29.md) rather than [wait(for:)](../xctestcase/wait%28for_%29.md), XCTest evaluates `predicate` on the main actor.

# initWithPredicate:object: (Objective-C)

**Framework:** XCTest  
**Kind:** Instance Method

Creates an expectation that’s fulfilled when an `NSPredicate` instance returns `true`, optionally for a provided object.

## Declaration

```objectivec
- (instancetype) initWithPredicate:(NSPredicate *) predicate object:(id) object;
```

## Parameters

- `predicate`: The predicate to evaluate.
- `object`: An optional object XCTest evaluates the predicate against.

<a id="Discussion"></a>

## Discussion

When you use an instance of this class from Swift and await using [fulfillment(of:timeout:enforceOrder:)](../xctestcase/fulfillment%28of_timeout_enforceorder_%29.md) rather than [waitForExpectations:](../xctestcase/wait%28for_%29.md), XCTest evaluates `predicate` on the main actor.
