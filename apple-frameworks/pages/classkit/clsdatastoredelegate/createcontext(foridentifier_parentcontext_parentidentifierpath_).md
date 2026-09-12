> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/classkit/clsdatastoredelegate/createcontext(foridentifier:parentcontext:parentidentifierpath:)](https://developer.apple.com/documentation/classkit/clsdatastoredelegate/createcontext(foridentifier:parentcontext:parentidentifierpath:))

# createContext(forIdentifier:parentContext:parentIdentifierPath:) (Swift)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 11.3+ · macOS 11.0+ · visionOS 1.0+

Asks the delegate for a new context with the given identifier for the given parent context.

## Declaration

```swift
func createContext(forIdentifier identifier: String, parentContext: CLSContext, parentIdentifierPath: [String]) -> CLSContext?
```

## Parameters

- `identifier`: The identifier of the new context.
- `parentContext`: The parent of the new context.

<a id="return-value"></a>

## Return Value

The new context.

<a id="Discussion"></a>

## Discussion

The framework automatically adds the returned context as a child of the parent context and saves the changes. You only need to create, initialize, and return the new context.

# createContextForIdentifier:parentContext:parentIdentifierPath: (Objective-C)

**Framework:** ClassKit  
**Kind:** Instance Method  
**Availability:** iOS 11.3+ · iPadOS 11.3+ · Mac Catalyst 14.0+ · macOS 11.0+ · visionOS 1.0+

Asks the delegate for a new context with the given identifier for the given parent context.

## Declaration

```objectivec
- (CLSContext *) createContextForIdentifier:(NSString *) identifier parentContext:(CLSContext *) parentContext parentIdentifierPath:(NSArray<NSString *> *) parentIdentifierPath;
```

## Parameters

- `identifier`: The identifier of the new context.
- `parentContext`: The parent of the new context.

<a id="return-value"></a>

## Return Value

The new context.

<a id="Discussion"></a>

## Discussion

The framework automatically adds the returned context as a child of the parent context and saves the changes. You only need to create, initialize, and return the new context.
