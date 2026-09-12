> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsspecifiertest/init(objectspecifier:comparisonoperator:test:)](https://developer.apple.com/documentation/foundation/nsspecifiertest/init(objectspecifier:comparisonoperator:test:))

# init(objectSpecifier:comparisonOperator:test:) (Swift)

**Framework:** Foundation  
**Kind:** Initializer  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier test initialized to evaluate a test object against an object specified by an object specifier using a given comparison operation.

## Declaration

```swift
init(objectSpecifier obj1: NSScriptObjectSpecifier?, comparisonOperator compOp: NSSpecifierTest.TestComparisonOperation, test obj2: Any?)
```

## Parameters

- `obj1`: An object specifier.
- `compOp`: The comparison operation.
- `obj2`: The object against which to evaluate the object specified by `obj1`.

<a id="return-value"></a>

## Return Value

A specifier test initialized to evaluate (`obj2`) against an object specified by `obj1` using the comparison operation `compOp`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)

# initWithObjectSpecifier:comparisonOperator:testObject: (Objective-C)

**Framework:** Foundation  
**Kind:** Instance Method  
**Availability:** Mac Catalyst 13.0+ · macOS 10.0+

Returns a specifier test initialized to evaluate a test object against an object specified by an object specifier using a given comparison operation.

## Declaration

```objectivec
- (instancetype) initWithObjectSpecifier:(NSScriptObjectSpecifier *) obj1 comparisonOperator:(NSTestComparisonOperation) compOp testObject:(id) obj2;
```

## Parameters

- `obj1`: An object specifier.
- `compOp`: The comparison operation.
- `obj2`: The object against which to evaluate the object specified by `obj1`.

<a id="return-value"></a>

## Return Value

A specifier test initialized to evaluate (`obj2`) against an object specified by `obj1` using the comparison operation `compOp`.

## See Also

### Related Documentation

- [Cocoa Scripting Guide](https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ScriptableCocoaApplications/SApps_intro/SAppsIntro.html#//apple_ref/doc/uid/TP40002164)
