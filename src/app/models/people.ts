export class Person
{
  constructor(
    public Id: number,
    public Name: string,
    public Age: number,
    public Address: string,
    public CityStateZip: string,
    public Interests: string,
    public Picture: string
  ) { }
}

export class People
{
    public PeopleList: Person[]
}