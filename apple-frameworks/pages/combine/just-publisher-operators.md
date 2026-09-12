> Snapshot-pinned source for Apple cross-platform frameworks snapshot-75c95c22eb2a: [documentation/combine/just-publisher-operators](https://developer.apple.com/documentation/combine/just-publisher-operators)

# Publisher Operators

**Framework:** Combine  
**Kind:** API Collection

Methods that create downstream publishers or subscribers to act on the elements they receive.

## Topics

### Mapping elements

- [map(\_:)](just/map%28__%29.md)
- [tryMap(\_:)](just/trymap%28__%29.md)
- [mapError(\_:)](just/maperror%28__%29.md)
- [scan(\_:\_:)](just/scan%28____%29.md)
- [tryScan(\_:\_:)](just/tryscan%28____%29.md)
- [setFailureType(to:)](just/setfailuretype%28to_%29.md)

### Filtering elements

- [filter(\_:)](just/filter%28__%29.md)
- [compactMap(\_:)](just/compactmap%28__%29.md)
- [removeDuplicates()](just/removeduplicates%28%29.md): Conforms when `Output` conforms to `Equatable`.
- [removeDuplicates(by:)](just/removeduplicates%28by_%29.md)
- [tryRemoveDuplicates(by:)](just/tryremoveduplicates%28by_%29.md)
- [replaceEmpty(with:)](just/replaceempty%28with_%29.md)
- [replaceError(with:)](just/replaceerror%28with_%29.md)

### Reducing elements

- [collect()](just/collect%28%29.md)
- [ignoreOutput()](just/ignoreoutput%28%29.md)
- [reduce(\_:\_:)](just/reduce%28____%29.md)
- [tryReduce(\_:\_:)](just/tryreduce%28____%29.md)

### Applying mathematical operations on elements

- [count()](just/count%28%29.md)
- [max()](just/max%28%29.md): Conforms when `Output` conforms to `Comparable`.
- [max(by:)](just/max%28by_%29.md)
- [min()](just/min%28%29.md): Conforms when `Output` conforms to `Comparable`.
- [min(by:)](just/min%28by_%29.md)

### Applying matching criteria to elements

- [contains(\_:)](just/contains%28__%29.md): Conforms when `Output` conforms to `Equatable`.
- [contains(where:)](just/contains%28where_%29.md)
- [tryContains(where:)](just/trycontains%28where_%29.md)
- [allSatisfy(\_:)](just/allsatisfy%28__%29.md)
- [tryAllSatisfy(\_:)](just/tryallsatisfy%28__%29.md)

### Applying sequence operations to elements

- [dropFirst(\_:)](just/dropfirst%28__%29.md)
- [drop(while:)](just/drop%28while_%29.md)
- [append(\_:)](just/append%28__%29-7eyqj.md)
- [append(\_:)](just/append%28__%29-7sxlu.md)
- [prepend(\_:)](just/prepend%28__%29-39e57.md)
- [prepend(\_:)](just/prepend%28__%29-7fg73.md)
- [prefix(\_:)](just/prefix%28__%29.md)
- [prefix(while:)](just/prefix%28while_%29.md)

### Selecting specific elements

- [first()](just/first%28%29.md)
- [first(where:)](just/first%28where_%29.md)
- [last()](just/last%28%29.md)
- [last(where:)](just/last%28where_%29.md)
- [output(at:)](just/output%28at_%29.md)
- [output(in:)](just/output%28in_%29.md)

### Handling errors

- [retry(\_:)](just/retry%28__%29.md)
