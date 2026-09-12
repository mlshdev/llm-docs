> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/healthkit/hkquery/predicateforcategorysamplesequaltovalues:](https://developer.apple.com/documentation/healthkit/hkquery/predicateforcategorysamplesequaltovalues:)

# predicateForCategorySamplesEqualToValues:

**Interface language:** Objective-C

**Framework:** HealthKit  
**Kind:** Type Method  
**Availability:** iOS · iPadOS · Mac Catalyst · macOS · visionOS · watchOS

A predicate that returns category samples with a matching value.

## Declaration

```objectivec
+ (NSPredicate *) predicateForCategorySamplesEqualToValues:(NSSet<NSNumber *> *) values;
```

## Parameters

- `values`: The category value to match. Each category type has a set of valid values. For more information about the category types, see [HKCategoryTypeIdentifier](../hkcategorytypeidentifier.md).

<a id="Discussion"></a>

## Discussion

The following example creates a query for sleep analysis samples with the [HKCategoryValueSleepAnalysisAsleepDeep](../hkcategoryvaluesleepanalysis/asleepdeep.md) category value.

```objc
HKCategoryType *sleepType = [HKObjectType categoryTypeForIdentifier:HKCategoryTypeIdentifierSleepAnalysis];

NSPredicate *deepSleepPredicate =
[HKQuery predicateForCategorySamplesEqualToValues:
 [NSSet setWithObject:
  [NSNumber numberWithInt:HKCategoryValueSleepAnalysisAsleepDeep]]];

HKSampleQuery *query = [[HKSampleQuery alloc]
                        initWithSampleType:sleepType
                        predicate:deepSleepPredicate
                        limit:HKObjectQueryNoLimit
                        sortDescriptors:nil
                        resultsHandler:^(HKSampleQuery * _Nonnull query,
                                         NSArray<__kindof HKSample *> * _Nullable results,
                                         NSError * _Nullable error) {
    
    if (error != nil) {
        // Handle the error here.
        NSLog(@"*** An error occurred: %@ ***", error.localizedDescription);
        return;
    }
    
    // Do something with the results here.
    
}];

[store executeQuery:query];
```

> **Note**

>  Because the category type is an integer, several different category types may share the same value. You’ll need to specify the category type that you’re interested in, either in the query or in an additional predicate.

## See Also

### Creating category sample predicates

- [predicateForCategorySamplesWithOperatorType:value:](predicateforcategorysamples%28with_value_%29.md): Deprecated. Returns a predicate that checks a category sample’s value.
