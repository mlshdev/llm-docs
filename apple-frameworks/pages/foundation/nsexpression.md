> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/foundation/nsexpression](https://developer.apple.com/documentation/foundation/nsexpression)

# NSExpression (Swift)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression for use in a comparison predicate.

## Declaration

```swift
class NSExpression
```

<a id="overview"></a>

## Overview

Comparison operations in an [NSPredicate](nspredicate.md) derive from two expressions as instances of the [NSExpression](nsexpression.md) class. You create expressions for constant values, key paths, and so on.

Generally, anywhere in the [NSExpression](nsexpression.md) class hierarchy where there’s a composite API and subtypes that may only reasonably respond to a subset of that API, invoking a method that doesn’t make sense for that subtype throws an exception.

<a id="Aggregate-Expressions"></a>

### Aggregate Expressions

[NSExpression.ExpressionType.aggregate](nsexpression/expressiontype-swift.enum/aggregate.md) allows you to create predicates containing expressions that evaluate to collections that contain further expressions. The collection may be an [NSArray](nsarray.md), [NSSet](nsset.md), or [NSDictionary](nsdictionary.md) object.

Core Data doesn’t support aggregate expressions.

<a id="Subquery-Expressions"></a>

### Subquery Expressions

The [NSExpression.ExpressionType.subquery](nsexpression/expressiontype-swift.enum/subquery.md) creates a subexpression that returns a subset of a collection of objects. This allows you to create sophisticated queries across relationships, such as a search for multiple correlated values on the destination object of a relationship.

<a id="Set-Expressions"></a>

### Set Expressions

The set expressions ([NSExpression.ExpressionType.unionSet](nsexpression/expressiontype-swift.enum/unionset.md), [NSExpression.ExpressionType.intersectSet](nsexpression/expressiontype-swift.enum/intersectset.md), and [NSExpression.ExpressionType.minusSet](nsexpression/expressiontype-swift.enum/minusset.md)) combine results in a manner similar to the [NSSet](nsset.md) methods.

Both sides of these expressions must evaluate to a collection; the left side must evaluate to an `NSSet` object, and the right side can be any other collection type.

```objc
(expression UNION expression)
(expression INTERSECT expression)
(expression MINUS expression)
```

Core Data doesn’t support set expressions.

<a id="Function-Expressions"></a>

### Function Expressions

In macOS 10.4, [NSExpression](nsexpression.md) only supports a predefined set of functions: `sum`, `count`, `min`, `max`, and `average`. You access these predefined functions in the predicate syntax using custom keywords (for example, `MAX(1, 5, 10)`).

In macOS 10.5 and later, function expressions also support arbitrary method invocations. To implement this extended functionality, use the syntax `FUNCTION(receiver, selectorName, arguments, ...),` as in the following example:

```objc
FUNCTION(@"/Developer/Tools/otest", @"lastPathComponent") => @"otest"
```

All methods must take one or more `id` arguments and return an `id` value, although you can use the `CAST` expression to convert datatypes with lossy string representations (for example, `CAST(####, "NSDate")`). macOS 10.5 extends the `CAST` expression to provide support for casting to classes for use in creating receivers for function expressions.

Although Core Data supports evaluation of the predefined functions, it doesn’t support the evaluation of custom predicate functions in the persistent stores (during a fetch).

## Topics

### Creating an Expression

- [init(expressionType:)](nsexpression/init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [init(format:argumentArray:)](nsexpression/init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [init(format:arguments:)](nsexpression/init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [init(format:\_:)](nsexpression/init%28format___%29.md): Creates the expression with the expression format and arguments list you specify.
- [init(coder:)](nsexpression/init%28coder_%29.md): Creates an expression by decoding from the coder you specify.

### Creating an Expression for a Value

- [init(forConstantValue:)](nsexpression/init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject()](nsexpression/expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [init(forKeyPath:)](nsexpression/init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [init(forVariable:)](nsexpression/init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [init(forKeyPath:)](nsexpression/init%28forkeypath_%29-98by.md): Creates an expression using a key path you specify.
- [expressionForAnyKey()](nsexpression/expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.

### Creating a Collection Expression

- [init(forAggregate:)](nsexpression/init%28foraggregate_%29.md): Creates an aggregate expression for a specified collection.
- [init(forUnionSet:with:)](nsexpression/init%28forunionset_with_%29.md): Creates an expression object that represents the union of a specified set and collection.
- [init(forIntersectSet:with:)](nsexpression/init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [init(forMinusSet:with:)](nsexpression/init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.

### Creating a Subquery

- [init(forSubquery:usingIteratorVariable:predicate:)](nsexpression/init%28forsubquery_usingiteratorvariable_predicate_%29.md): Creates an expression that filters a collection by storing elements in the collection in a specified variable and keeping the elements that the qualifier returns as true.

### Creating a Conditional Expression

- [init(forConditional:trueExpression:falseExpression:)](nsexpression/init%28forconditional_trueexpression_falseexpression_%29.md): Creates an expression that returns a result, depending on the value of predicate.

### Creating an Expression Using Blocks

- [init(block:arguments:)](nsexpression/init%28block_arguments_%29.md): Creates an expression object that uses the block for evaluating objects.

### Creating an Expression for a Function

- [init(forFunction:arguments:)](nsexpression/init%28forfunction_arguments_%29.md): Creates an expression that invokes one of the predefined functions.
- [init(forFunction:selectorName:arguments:)](nsexpression/init%28forfunction_selectorname_arguments_%29.md): Creates an expression that returns the result of invoking a selector with a specified name using specified arguments.

### Getting Information About an Expression

- [arguments](nsexpression/arguments.md): The arguments for the expression.
- [collection](nsexpression/collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](nsexpression/constantvalue.md): The constant value of the expression.
- [expressionType](nsexpression/expressiontype-swift.property.md): The expression type for the expression.
- [NSExpression.ExpressionType](nsexpression/expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](nsexpression/function.md): The function for the expression.
- [keyPath](nsexpression/keypath.md): The key path for the expression.
- [operand](nsexpression/operand.md): The operand for the expression.
- [predicate](nsexpression/predicate.md): The predicate of a subquery expression.
- [left](nsexpression/left.md): The left expression of an aggregate expression.
- [right](nsexpression/right.md): The right expression of an aggregate expression.
- [variable](nsexpression/variable.md): The variable for the expression.

### Evaluating an Expression

- [expressionValue(with:context:)](nsexpression/expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation()](nsexpression/allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [false](nsexpression/false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [true](nsexpression/true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.

### Accessing the Expression Block

- [expressionBlock](nsexpression/expressionblock.md): The block that executes to evaluate the expression.

### Initializers

- [init(\_:)](nsexpression/init%28__%29.md)
- [init(forBlock:arguments:)](nsexpression/init%28forblock_arguments_%29.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [CVarArg](https://developer.apple.com/documentation/swift/cvararg)
- [CustomDebugStringConvertible](https://developer.apple.com/documentation/swift/customdebugstringconvertible)
- [CustomStringConvertible](https://developer.apple.com/documentation/swift/customstringconvertible)
- [Equatable](https://developer.apple.com/documentation/swift/equatable)
- [Hashable](https://developer.apple.com/documentation/swift/hashable)
- [NSCoding](nscoding.md)
- [NSCopying](nscopying.md)
- [NSObjectProtocol](../objectivec/nsobjectprotocol.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Filltering

- [Predicate](predicate.md): A logical condition used to test a set of input values for searching or filtering.
- [PredicateError](predicateerror.md): An error thrown while evaluating a predicate.
- [PredicateCodableConfiguration](predicatecodableconfiguration.md): A specification of the expected types and key paths found in an archived predicate.
- [PredicateCodableKeyPathProviding](predicatecodablekeypathproviding.md): A type that provides the expected key paths found in an archived predicate.
- [PredicateExpression](predicateexpression.md): A component expression that makes up part of a predicate.
- [StandardPredicateExpression](standardpredicateexpression.md): A component expression that makes up part of a predicate, and that’s supported by the standard predicate type.
- [PredicateExpressions](predicateexpressions.md): The expressions that make up a predicate.
- [PredicateBindings](predicatebindings.md): A mapping from a predicates’s input variables to their values.
- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.

# NSExpression (Objective-C)

**Framework:** Foundation  
**Kind:** Class  
**Availability:** iOS 3.0+ · iPadOS 3.0+ · Mac Catalyst 13.1+ · macOS 10.4+ · tvOS 9.0+ · visionOS 1.0+ · watchOS 2.0+

An expression for use in a comparison predicate.

## Declaration

```objectivec
@interface NSExpression : NSObject
```

<a id="overview"></a>

## Overview

Comparison operations in an [NSPredicate](nspredicate.md) derive from two expressions as instances of the [NSExpression](nsexpression.md) class. You create expressions for constant values, key paths, and so on.

Generally, anywhere in the [NSExpression](nsexpression.md) class hierarchy where there’s a composite API and subtypes that may only reasonably respond to a subset of that API, invoking a method that doesn’t make sense for that subtype throws an exception.

<a id="Aggregate-Expressions"></a>

### Aggregate Expressions

[NSAggregateExpressionType](nsexpression/expressiontype-swift.enum/aggregate.md) allows you to create predicates containing expressions that evaluate to collections that contain further expressions. The collection may be an [NSArray](nsarray.md), [NSSet](nsset.md), or [NSDictionary](nsdictionary.md) object.

Core Data doesn’t support aggregate expressions.

<a id="Subquery-Expressions"></a>

### Subquery Expressions

The [NSSubqueryExpressionType](nsexpression/expressiontype-swift.enum/subquery.md) creates a subexpression that returns a subset of a collection of objects. This allows you to create sophisticated queries across relationships, such as a search for multiple correlated values on the destination object of a relationship.

<a id="Set-Expressions"></a>

### Set Expressions

The set expressions ([NSUnionSetExpressionType](nsexpression/expressiontype-swift.enum/unionset.md), [NSIntersectSetExpressionType](nsexpression/expressiontype-swift.enum/intersectset.md), and [NSMinusSetExpressionType](nsexpression/expressiontype-swift.enum/minusset.md)) combine results in a manner similar to the [NSSet](nsset.md) methods.

Both sides of these expressions must evaluate to a collection; the left side must evaluate to an `NSSet` object, and the right side can be any other collection type.

```objc
(expression UNION expression)
(expression INTERSECT expression)
(expression MINUS expression)
```

Core Data doesn’t support set expressions.

<a id="Function-Expressions"></a>

### Function Expressions

In macOS 10.4, [NSExpression](nsexpression.md) only supports a predefined set of functions: `sum`, `count`, `min`, `max`, and `average`. You access these predefined functions in the predicate syntax using custom keywords (for example, `MAX(1, 5, 10)`).

In macOS 10.5 and later, function expressions also support arbitrary method invocations. To implement this extended functionality, use the syntax `FUNCTION(receiver, selectorName, arguments, ...),` as in the following example:

```objc
FUNCTION(@"/Developer/Tools/otest", @"lastPathComponent") => @"otest"
```

All methods must take one or more `id` arguments and return an `id` value, although you can use the `CAST` expression to convert datatypes with lossy string representations (for example, `CAST(####, "NSDate")`). macOS 10.5 extends the `CAST` expression to provide support for casting to classes for use in creating receivers for function expressions.

Although Core Data supports evaluation of the predefined functions, it doesn’t support the evaluation of custom predicate functions in the persistent stores (during a fetch).

## Topics

### Creating an Expression

- [initWithExpressionType:](nsexpression/init%28expressiontype_%29.md): Creates the expression with the specified expression type.
- [expressionWithFormat:](nsexpression/expressionwithformat_.md): Creates the expression with the specified expression arguments.
- [expressionWithFormat:argumentArray:](nsexpression/init%28format_argumentarray_%29.md): Creates the expression with the specified expression format and array of arguments.
- [expressionWithFormat:arguments:](nsexpression/init%28format_arguments_%29.md): Creates the expression with the specified expression format and arguments list.
- [initWithCoder:](nsexpression/init%28coder_%29.md): Creates an expression by decoding from the coder you specify.

### Creating an Expression for a Value

- [expressionForConstantValue:](nsexpression/init%28forconstantvalue_%29.md): Creates an expression that represents a specified constant value.
- [expressionForEvaluatedObject](nsexpression/expressionforevaluatedobject%28%29.md): Creates an expression that represents the object you’re evaluating.
- [expressionForKeyPath:](nsexpression/init%28forkeypath_%29-1aqf5.md): Creates an expression that invokes the value function with a specified key path.
- [expressionForVariable:](nsexpression/init%28forvariable_%29.md): Creates an expression that extracts a value from the variable bindings dictionary for a specified key.
- [expressionForAnyKey](nsexpression/expressionforanykey%28%29.md): Creates an expression that represents any key for a Spotlight query.

### Creating a Collection Expression

- [expressionForAggregate:](nsexpression/init%28foraggregate_%29.md): Creates an aggregate expression for a specified collection.
- [expressionForUnionSet:with:](nsexpression/init%28forunionset_with_%29.md): Creates an expression object that represents the union of a specified set and collection.
- [expressionForIntersectSet:with:](nsexpression/init%28forintersectset_with_%29.md): Creates an expression object that represents the intersection of a specified set and collection.
- [expressionForMinusSet:with:](nsexpression/init%28forminusset_with_%29.md): Creates an expression object that represents the subtraction of a specified collection from a specified set.

### Creating a Subquery

- [expressionForSubquery:usingIteratorVariable:predicate:](nsexpression/init%28forsubquery_usingiteratorvariable_predicate_%29.md): Creates an expression that filters a collection by storing elements in the collection in a specified variable and keeping the elements that the qualifier returns as true.

### Creating a Conditional Expression

- [expressionForConditional:trueExpression:falseExpression:](nsexpression/init%28forconditional_trueexpression_falseexpression_%29.md): Creates an expression that returns a result, depending on the value of predicate.

### Creating an Expression Using Blocks

- [expressionForBlock:arguments:](nsexpression/init%28block_arguments_%29.md): Creates an expression object that uses the block for evaluating objects.

### Creating an Expression for a Function

- [expressionForFunction:arguments:](nsexpression/init%28forfunction_arguments_%29.md): Creates an expression that invokes one of the predefined functions.
- [expressionForFunction:selectorName:arguments:](nsexpression/init%28forfunction_selectorname_arguments_%29.md): Creates an expression that returns the result of invoking a selector with a specified name using specified arguments.

### Getting Information About an Expression

- [arguments](nsexpression/arguments.md): The arguments for the expression.
- [collection](nsexpression/collection.md): The collection of expressions in an aggregate expression, or the collection element of a subquery expression.
- [constantValue](nsexpression/constantvalue.md): The constant value of the expression.
- [expressionType](nsexpression/expressiontype-swift.property.md): The expression type for the expression.
- [NSExpressionType](nsexpression/expressiontype-swift.enum.md): Defines the possible types of an expression.
- [function](nsexpression/function.md): The function for the expression.
- [keyPath](nsexpression/keypath.md): The key path for the expression.
- [operand](nsexpression/operand.md): The operand for the expression.
- [predicate](nsexpression/predicate.md): The predicate of a subquery expression.
- [leftExpression](nsexpression/left.md): The left expression of an aggregate expression.
- [rightExpression](nsexpression/right.md): The right expression of an aggregate expression.
- [variable](nsexpression/variable.md): The variable for the expression.

### Evaluating an Expression

- [expressionValueWithObject:context:](nsexpression/expressionvalue%28with_context_%29.md): Evaluates an expression using a specified object and context.
- [allowEvaluation](nsexpression/allowevaluation%28%29.md): Forces a securely decoded expression to allow evaluation.
- [falseExpression](nsexpression/false.md): An expression to evalutate if a conditional expression’s predicate evaluates to false.
- [trueExpression](nsexpression/true.md): An expression to evalutate if a conditional expression’s predicate evaluates to true.

### Accessing the Expression Block

- [expressionBlock](nsexpression/expressionblock.md): The block that executes to evaluate the expression.

### Instance Variables

- [reserved](nsexpression/reserved.md)

## Relationships

### Inherits From

- [NSObject](../objectivec/nsobject-swift.class.md)

### Conforms To

- [NSCopying](nscopying.md)
- [NSSecureCoding](nssecurecoding.md)

## See Also

### Filltering

- [NSPredicate](nspredicate.md): A definition of logical conditions for constraining a search for a fetch or for in-memory filtering.
- [NSComparisonPredicate](nscomparisonpredicate.md): A specialized predicate for comparing expressions.
- [NSCompoundPredicate](nscompoundpredicate.md): A specialized predicate that evaluates logical combinations of other predicates.
